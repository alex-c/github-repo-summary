import { User } from '../models/User';
import {
  SetUserAction,
  SetRepositoriesAction,
  SetSortingAction,
  SetStatisticsAction,
  SetLoadingStateAction,
  SetFavoritesAction,
} from './actions';
import { ActionTypeKeys } from './actionTypeKeys';
import { Repository } from '../models/Repository';
import { Sorting } from '../constants/Sorting';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { StarsStatistics } from '../models/StarsStatistics';
import { Favorite } from '../models/Favorite';

const setUser = (user: User): SetUserAction => {
  return {
    type: ActionTypeKeys.SET_USER,
    user,
  };
};

const setRepositories = (repositories: Repository[]): SetRepositoriesAction => {
  return {
    type: ActionTypeKeys.SET_REPOSITORIES,
    repositories,
  };
};

const setStatistics = (
  languageStatistics: LanguageStatistics,
  starsStatistics: StarsStatistics,
): SetStatisticsAction => {
  return {
    type: ActionTypeKeys.SET_STATISTICS,
    languageStatistics,
    starsStatistics,
  };
};

const setSorting = (sorting: Sorting): SetSortingAction => {
  return {
    type: ActionTypeKeys.SET_SORTING,
    sorting,
  };
};

const setLoadingState = (loading_state: boolean): SetLoadingStateAction => {
  return {
    type: ActionTypeKeys.SET_LOADING_STATE,
    loading_state,
  };
};

const setFavorites = (favorites: Favorite[]): SetFavoritesAction => {
  return {
    type: ActionTypeKeys.SET_FAVORITES,
    favorites,
  };
};

export { setUser, setRepositories, setStatistics, setSorting, setLoadingState, setFavorites };
