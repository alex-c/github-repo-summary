import React, { useState } from 'react';
import {
  Alignment,
  Button,
  AnchorButton,
  Navbar,
  Intent,
  Tooltip,
  InputGroup,
  Popover,
  PopoverPosition,
  Card,
  Icon,
  Colors,
} from '@blueprintjs/core';
import Summary from './Summary';
import api from '../services/api';
import { IconNames } from '@blueprintjs/icons';
import { useDispatch } from 'react-redux';
import { ActionTypeKeys } from '../actions/actionTypeKeys';
import { Repository } from '../models/Repository';
import { Language } from '../models/Language';
import { StarsStatistics } from '../models/StarsStatistics';

const roundStarsStat = (stars: number) => Math.round(stars * 10) / 10;

const calculateMeanStars = (stars: number, repoCount: number) => roundStarsStat(stars / repoCount);

const calculateMedianStars = (repositories: Repository[]) => {
  const sortedRepos = repositories.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
  const repoMedian = sortedRepos.length / 2;
  if (sortedRepos.length % 2 === 1) {
    return roundStarsStat(
      (sortedRepos[Math.floor(repoMedian)].stargazers_count + sortedRepos[Math.ceil(repoMedian)].stargazers_count) / 2,
    );
  } else {
    return sortedRepos[repoMedian].stargazers_count;
  }
};

function App() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleSearch = () => {
    if (userName !== '') {
      api
        .getUser(userName)
        .then(result => {
          dispatch({
            type: ActionTypeKeys.SET_USER,
            user: {
              login: result.login,
              name: result.name,
              bio: result.bio,
              location: result.location,
              company: result.company,
              blog: result.blog,
              email: result.email,
              avatarUrl: result.avatar_url,
              htmlUrl: result.html_url,
              publicRepos: result.public_repos,
              publicGists: result.public_gists,
              followers: result.followers,
              following: result.following,
              reposUrl: result.repos_url,
            },
          });
          let numberOfRepos = result.public_repos;
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
        })
        .catch(() => {
          setPopoverVisible(true);
          setInterval(() => setPopoverVisible(false), 2000);
        });
    }
  };

  const processLoadedRepos = (repositories: Repository[]) => {
    const languages: Language[] = [];
    const starStatistics: StarsStatistics = {
      max_stars_repo: null,
      average_stars: 0,
      median_stars: 0,
    };

    // Compute repositories stats
    let maxStars = 0;
    let totalStars = 0;
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
      totalStars += repository.stargazers_count;
      if (repository.stargazers_count > maxStars) {
        starStatistics.max_stars_repo = repository;
        maxStars = repository.stargazers_count;
      }
    }

    // Calculate average and median stars
    starStatistics.average_stars = calculateMeanStars(totalStars, repositories.length);
    starStatistics.median_stars = calculateMedianStars(repositories);

    // Handle the `null` language
    const unknownLanguage = languages.find(language => language.name === null);
    if (unknownLanguage !== undefined) {
      unknownLanguage.name = 'Unknown';
    }

    // Sort by most used language
    languages.sort((language1, language2) => language2.count - language1.count);

    // Dispatch full repo list and language stats
    dispatch({
      type: ActionTypeKeys.SET_STATISTICS,
      languageStatistics: { languages, language_count: languages.length, repository_count: repositories.length },
      starStatistics: starStatistics,
    });
    dispatch({
      type: ActionTypeKeys.SET_REPOSITORIES,
      repositories: repositories,
    });
  };

  const inputButtons = (
    <>
      <Tooltip content="Search">
        <Button icon="search" intent={Intent.PRIMARY} minimal={true} onClick={handleSearch} />
      </Tooltip>
      <Tooltip content="Clear">
        <Button icon="cross" intent={Intent.WARNING} minimal={true} onClick={() => setUserName('')} />
      </Tooltip>
    </>
  );

  return (
    <>
      <Navbar>
        <div className="viewport">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Github Repo Summary</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Popover position={PopoverPosition.BOTTOM} isOpen={popoverVisible}>
              <InputGroup
                placeholder="Github user name"
                rightElement={inputButtons}
                value={userName}
                onChange={(event: { target: any }) => setUserName(event.target.value)}
                onKeyPress={event => {
                  if (event.charCode === 13) {
                    handleSearch();
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
            <Navbar.Divider />
            <AnchorButton
              icon="git-repo"
              text="Github"
              href="https://github.com/alex-c/github-repo-summary"
              target="_blank"
            />
          </Navbar.Group>
        </div>
      </Navbar>
      <Summary />
    </>
  );
}

export default App;
