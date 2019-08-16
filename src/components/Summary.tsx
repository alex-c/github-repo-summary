import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import { User } from '../models/User';
import RepositoriesSummary from './RepositoriesSummary';
import RepositoryList from './RepositoryList';

function Summary() {
  const user: User = useSelector((state: AppState) => state.user, shallowEqual);
  const repositories = useSelector((state: AppState) => state.repositories);
  return (
    <main className="viewport">
      <UserSummary user={user} />
      <RepositoriesSummary repositories={repositories} />
      <RepositoryList repositories={repositories} />
    </main>
  );
}

export default Summary;
