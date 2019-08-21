import {
  SetUserAction,
  OtherAction,
  SetRepositoriesAction,
  SetStatisticsAction,
  SetSortingAction,
  SetLoadingStateAction,
  SetFavoritesAction,
} from './actions';

export type ActionTypes =
  | SetUserAction
  | SetRepositoriesAction
  | SetStatisticsAction
  | SetSortingAction
  | SetLoadingStateAction
  | SetFavoritesAction
  | OtherAction;
