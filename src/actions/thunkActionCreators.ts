import { Sorting } from '../constants/Sorting';
import sortRepositories from './helpers/sortRepositories';
import { Repository } from '../models/Repository';
import { setRepositories, setSorting, setLoadingState, setFavorites } from './actionCreators';
import { Favorite } from '../models/Favorite';

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

export { changeSorting, loadRepositories, addUserToFavorites, removeUserFromFavorites };
