import {
  SetUserAction,
  OtherAction,
  SetRepositoriesAction,
  SetStatisticsAction,
  SetSortingAction,
  SetLoadingStateAction,
  SetFavoritesAction,
  SetPaginationAction,
} from './actions';

export type ActionTypes =
  | SetUserAction
  | SetRepositoriesAction
  | SetStatisticsAction
  | SetSortingAction
  | SetLoadingStateAction
  | SetFavoritesAction
  | SetPaginationAction
  | OtherAction;
