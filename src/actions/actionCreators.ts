import { Sorting } from '../constants/Sorting';
import { ActionTypeKeys } from './actionTypeKeys';
import sortRepositories from './helpers/sortRepositories';
import { Repository } from '../models/Repository';

const changeSorting = (sorting: Sorting) => (dispatch, getState) => {
  dispatch({
    type: ActionTypeKeys.SET_SORTING,
    sorting: sorting,
  });
  const { repositories } = getState();
  dispatch({
    type: ActionTypeKeys.SET_REPOSITORIES,
    repositories: sortRepositories(repositories, sorting),
  });
};

const loadRepositories = (repositories: Repository[]) => (dispatch, getState) => {
  const { sorting } = getState();
  dispatch({
    type: ActionTypeKeys.SET_REPOSITORIES,
    repositories: sortRepositories(repositories, sorting),
  });
};

export { changeSorting, loadRepositories };
