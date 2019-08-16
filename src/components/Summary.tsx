import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import { User } from '../models/User';
import RepositoriesSummary from './RepositoriesSummary';
import RepositoryList from './RepositoryList';
import { NonIdealState } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function Summary() {
  const user: User = useSelector((state: AppState) => state.user, shallowEqual);
  const repositories = useSelector((state: AppState) => state.repositories);
  const languageStatistics = useSelector((state: AppState) => state.language_statistics);
  return (
    <main className="viewport">
      {user.login !== '' ? (
        <div>
          <UserSummary user={user} />
          <RepositoriesSummary languageStatistics={languageStatistics} />
          <RepositoryList repositories={repositories} />
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
