import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import RepositoriesSummary from './RepositoriesSummary';
import RepositoryList from './repostory_list/RepositoryList';
import { NonIdealState, Card, Elevation, Spinner, Intent } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function Summary() {
  const user = useSelector((state: AppState) => state.user);
  const repositories = useSelector((state: AppState) => state.repositories);
  const sorting = useSelector((state: AppState) => state.sorting);
  const languageStatistics = useSelector((state: AppState) => state.language_statistics);
  const starsStatistics = useSelector((state: AppState) => state.stars_statistics);
  const loading_state = useSelector((state: AppState) => state.loading_state);
  return user.login !== '' ? (
    <>
      <UserSummary user={user} />
      {loading_state ? (
        <Card elevation={Elevation.TWO}>
          <Spinner intent={Intent.PRIMARY} />
        </Card>
      ) : (
        <>
          {repositories.length !== 0 ? (
            <div>
              <RepositoriesSummary languageStatistics={languageStatistics} starsStatistics={starsStatistics} />
              <RepositoryList repositories={repositories} sorting={sorting} />
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
