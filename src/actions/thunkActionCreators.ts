import { Sorting } from '../constants/Sorting';
import sortRepositories from './helpers/sortRepositories';
import { Repository } from '../models/Repository';
import { setRepositories, setSorting, setLoadingState, setFavorites, setUser, setStatistics } from './actionCreators';
import { Favorite } from '../models/Favorite';
import api from '../services/api';
import { Language } from '../models/Language';
import { StarsStatistics } from '../models/StarsStatistics';
import { calculateMeanStars, calculateMedianStars } from './helpers/calculateStats';
import { IconNames } from '@blueprintjs/icons';
import showErrorToast from './helpers/showErrorToast';

const searchUser = (userName: string) => dispatch => {
  api
    .getUser(userName)
    .then(result => {
      dispatch(setUser(result));
      dispatch(setLoadingState(true));
      dispatch(setRepositories([]));
      let numberOfRepos = result.public_repos;
      if (numberOfRepos > 0) {
        let page = 1;
        let promises: object[] = [];
        while (numberOfRepos > 0) {
          promises.push(api.getUserRepositories(result.repos_url, page));
          numberOfRepos -= 100;
          page++;
        }
        Promise.all(promises).then((values: any[]) => {
          let repositories: Repository[] = [];
          for (let value of values) {
            repositories.push(...value.data);
          }
          dispatch(processLoadedRepos(repositories));
        });
      } else {
        dispatch(setLoadingState(false));
      }
    })
    .catch((error: Error) => {
      if (error.message.includes('404')) {
        showErrorToast(`User "${userName}" could not be found!`, IconNames.SEARCH);
      } else if (error.message.includes('403')) {
        showErrorToast('Rate limit reached! Try again later.', IconNames.LOCK);
      } else {
        showErrorToast('An error occured while attempting to retrieve user info from Github.');
      }
    });
};

const processLoadedRepos = (repositories: Repository[]) => dispatch => {
  const languages: Language[] = [];
  const starsStatistics: StarsStatistics = {
    max_stars_repo: repositories[0],
    total_stars: 0,
    average_stars: 0,
    median_stars: 0,
  };

  // Compute repositories stats
  let maxStars = starsStatistics.max_stars_repo.stargazers_count;
  for (let repository of repositories) {
    // Find unique languages and count the number of repos for each
    const language = languages.find(language => language.name === repository.language);
    if (language === undefined) {
      languages.push({
        name: repository.language,
        count: 1,
      });
    } else {
      language.count++;
    }

    // Find repo with most stars and count total stars
    starsStatistics.total_stars += repository.stargazers_count;
    if (repository.stargazers_count > maxStars) {
      starsStatistics.max_stars_repo = repository;
      maxStars = repository.stargazers_count;
    }
  }

  // Calculate average and median stars
  starsStatistics.average_stars = calculateMeanStars(starsStatistics.total_stars, repositories.length);
  starsStatistics.median_stars = calculateMedianStars(repositories);

  // Handle the `null` language
  const unknownLanguage = languages.find(language => language.name === null);
  if (unknownLanguage !== undefined) {
    unknownLanguage.name = 'Unknown';
  }

  // Sort by most used language
  languages.sort((language1, language2) => language2.count - language1.count);

  // Dispatch full repo list and language stats
  dispatch(
    setStatistics(
      { languages, language_count: languages.length, repository_count: repositories.length },
      starsStatistics,
    ),
  );
  dispatch(loadRepositories(repositories));
};

const changeSorting = (sorting: Sorting) => (dispatch, getState) => {
  dispatch(setSorting(sorting));
  const { repositories } = getState();
  const sortedRepositories = sortRepositories(repositories, sorting);
  dispatch(setRepositories(sortedRepositories));
};

const loadRepositories = (repositories: Repository[]) => (dispatch, getState) => {
  const { sorting } = getState();
  const sortedRepositories = sortRepositories(repositories, sorting);
  dispatch(setRepositories(sortedRepositories));
  dispatch(setLoadingState(false));
};

const addUserToFavorites = (user: Favorite) => (dispatch, getState) => {
  const { favorites } = getState();
  if (!favorites.map(favorite => favorite.name).includes(user.name)) {
    const newFavorites: Favorite[] = favorites.slice();
    newFavorites.push(user);
    dispatch(setFavorites(newFavorites));
  }
};

const removeUserFromFavorites = (user: Favorite) => (dispatch, getState) => {
  const { favorites } = getState();
  dispatch(setFavorites(favorites.filter(favorite => favorite.name !== user.name)));
};

const addUserToFavoritesIfExists = (userName: string) => (dispatch, getState) => {
  api
    .getUser(userName)
    .then(result => {
      dispatch(addUserToFavorites({ name: result.login }));
    })
    .catch(error => {
      if (error.message.includes('404')) {
        showErrorToast(`User "${userName}" could not be found!`, IconNames.SEARCH);
      } else if (error.message.includes('403')) {
        showErrorToast(`Rate limit reached! Can't check whether user "${userName}" exists.`, IconNames.LOCK);
      } else {
        showErrorToast('An error occured while attempting to retrieve user info from Github.');
      }
    });
};

export {
  searchUser,
  processLoadedRepos,
  changeSorting,
  loadRepositories,
  addUserToFavorites,
  removeUserFromFavorites,
  addUserToFavoritesIfExists,
};
