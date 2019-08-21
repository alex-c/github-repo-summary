import { Sorting } from '../constants/Sorting';
import sortRepositories from './helpers/sortRepositories';
import { Repository } from '../models/Repository';
import { setRepositories, setSorting, setLoadingState } from './actionCreators';

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

export { changeSorting, loadRepositories };
