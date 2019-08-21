import {
  SetUserAction,
  OtherAction,
  SetRepositoriesAction,
  SetStatisticsAction,
  SetSortingAction,
  SetLoadingStateAction,
} from './actions';

export type ActionTypes =
  | SetUserAction
  | SetRepositoriesAction
  | SetStatisticsAction
  | SetSortingAction
  | SetLoadingStateAction
  | OtherAction;
