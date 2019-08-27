import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../models/AppState';
import UserProfile from './UserProfile';
import Statistics from './Statistics';
import RepositoryList from './repostory_list/RepositoryList';
import { NonIdealState, Card, Elevation, Spinner, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function Summary() {
  const user = useSelector((state: AppState) => state.user);
  const loading_state = useSelector((state: AppState) => state.loading_state);
  const languageStatistics = useSelector((state: AppState) => state.language_statistics);
  const starsStatistics = useSelector((state: AppState) => state.stars_statistics);
  const repositories = useSelector((state: AppState) => state.repositories);
  const sorting = useSelector((state: AppState) => state.sorting);
  const pagination = useSelector((state: AppState) => state.pagination);
  return user.login !== '' ? (
    <>
      <UserProfile user={user} />
      {loading_state ? (
        <Card elevation={Elevation.TWO}>
          <Spinner intent={Intent.PRIMARY} />
        </Card>
      ) : (
        <>
          {repositories.length !== 0 ? (
            <div>
              <Statistics languageStatistics={languageStatistics} starsStatistics={starsStatistics} />
              <RepositoryList repositories={repositories} sorting={sorting} pagination={pagination} />
            </div>
          ) : (
            <NonIdealState
              icon={IconNames.DISABLE}
              title="No repositories."
              description="The user has no public repositories."
            />
          )}
        </>
      )}
    </>
  ) : (
    <NonIdealState
      icon={IconNames.DISABLE}
      title="No user selected."
      description="Enter a Github user name in the search bar above!"
    />
  );
}

export default Summary;
