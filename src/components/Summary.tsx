import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import RepositoriesSummary from './RepositoriesSummary';
import RepositoryList from './RepositoryList';
import { NonIdealState } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function Summary() {
  const user = useSelector((state: AppState) => state.user);
  const repositories = useSelector((state: AppState) => state.repositories);
  const languageStatistics = useSelector((state: AppState) => state.language_statistics);
  return (
    <main className="viewport">
      {user.login !== '' ? (
        <div>
          <UserSummary user={user} />
          {repositories.length !== 0 ? (
            <div>
              <RepositoriesSummary languageStatistics={languageStatistics} />
              <RepositoryList repositories={repositories} />
            </div>
          ) : (
            <NonIdealState
              icon={IconNames.DISABLE}
              title="No repositories."
              description="The user has no public repositories."
            />
          )}
        </div>
      ) : (
        <NonIdealState
          icon={IconNames.DISABLE}
          title="No user selected."
          description="Enter a Github user name in the search bar above!"
        />
      )}
    </main>
  );
}

export default Summary;
