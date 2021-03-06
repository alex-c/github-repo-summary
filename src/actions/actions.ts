import { ActionTypeKeys } from './actionTypeKeys';
import { User } from '../models/User';
import { Repository } from '../models/Repository';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { StarsStatistics } from '../models/StarsStatistics';
import { Favorite } from '../models/Favorite';
import { Paginaton } from '../models/Pagination';
import { Sorting } from '../constants/Sorting';

export interface SetUserAction {
  type: ActionTypeKeys.SET_USER;
  user: User;
}

export interface SetRepositoriesAction {
  type: ActionTypeKeys.SET_REPOSITORIES;
  repositories: Repository[];
}

export interface SetStatisticsAction {
  type: ActionTypeKeys.SET_STATISTICS;
  languageStatistics: LanguageStatistics;
  starsStatistics: StarsStatistics;
}

export interface SetSortingAction {
  type: ActionTypeKeys.SET_SORTING;
  sorting: Sorting;
}

export interface SetLoadingStateAction {
  type: ActionTypeKeys.SET_LOADING_STATE;
  loading_state: boolean;
}

export interface SetFavoritesAction {
  type: ActionTypeKeys.SET_FAVORITES;
  favorites: Favorite[];
}

export interface SetPaginationAction {
  type: ActionTypeKeys.SET_PAGINATION;
  pagination: Paginaton;
}

export interface OtherAction {
  type: ActionTypeKeys.OTHER_ACTION;
}
