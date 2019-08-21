import React, { useState } from 'react';
import {
  Popover,
  Card,
  PopoverPosition,
  InputGroup,
  Icon,
  Intent,
  Colors,
  Tooltip,
  Button,
  AnchorButton,
} from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { Repository } from '../models/Repository';
import { Language } from '../models/Language';
import { StarsStatistics } from '../models/StarsStatistics';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../models/AppState';
import api from '../services/api';
import { setUser, setLoadingState, setStatistics } from '../actions/actionCreators';
import { loadRepositories } from '../actions/thunkActionCreators';

const roundStarsStat = (stars: number) => Math.round(stars * 10) / 10;

const calculateMeanStars = (stars: number, repoCount: number) => roundStarsStat(stars / repoCount);

const calculateMedianStars = (repositories: Repository[]) => {
  const sortedRepos = repositories.slice().sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
  const repoMedian = sortedRepos.length / 2;
  if (sortedRepos.length % 2 === 1) {
    return roundStarsStat(
      (sortedRepos[Math.floor(repoMedian)].stargazers_count + sortedRepos[Math.ceil(repoMedian)].stargazers_count) / 2,
    );
  } else {
    return sortedRepos[repoMedian].stargazers_count;
  }
};

function Navbar() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(false);
  const currentUserName = useSelector((state: AppState) => state.user.login);

  const searchHandler = () => {
    if (userName !== '' && userName !== currentUserName) {
      api
        .getUser(userName)
        .then(result => {
          dispatch(setUser(result));
          dispatch(setLoadingState(true));
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
              processLoadedRepos(repositories);
            });
          }
        })
        .catch(() => {
          setPopoverVisible(true);
          setInterval(() => setPopoverVisible(false), 2000);
        });
    }
  };

  const resetHandler = () => {
    setUserName('');
  };

  const processLoadedRepos = (repositories: Repository[]) => {
    const languages: Language[] = [];
    const starsStatistics: StarsStatistics = {
      max_stars_repo: null,
      total_stars: 0,
      average_stars: 0,
      median_stars: 0,
    };

    // Compute repositories stats
    let maxStars = 0;
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

  return (
    <div id="navbar">
      <div className="viewport">
        <div id="navbar-title">Github Repo Summary</div>
        <div>
          <Popover position={PopoverPosition.BOTTOM} isOpen={popoverVisible}>
            <InputGroup
              placeholder="Github user name"
              rightElement={
                <>
                  <Tooltip content="Search">
                    <Button icon="search" intent={Intent.PRIMARY} minimal={true} onClick={searchHandler} />
                  </Tooltip>
                  <Tooltip content="Clear">
                    <Button icon="cross" intent={Intent.WARNING} minimal={true} onClick={resetHandler} />
                  </Tooltip>
                </>
              }
              value={userName}
              onChange={(event: { target: any }) => setUserName(event.target.value)}
              onKeyPress={event => {
                if (event.charCode === 13) {
                  searchHandler();
                }
              }}
            />
            <Card>
              <Icon icon={IconNames.ERROR} intent={Intent.DANGER} style={{ float: 'left' }} />
              <p>
                User <span style={{ color: Colors.RED1 }}>{userName}</span> could not be found!
              </p>
            </Card>
          </Popover>
        </div>
        <div id="navbar-right">
          <AnchorButton
            icon="git-repo"
            text="Github"
            href="https://github.com/alex-c/github-repo-summary"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
