import {
  SetUserAction,
  OtherAction,
  SetRepositoriesAction,
  SetStatisticsAction,
  SortRepositoriesAction,
} from './actions';

export type ActionTypes =
  | SetUserAction
  | SetRepositoriesAction
  | SetStatisticsAction
  | SortRepositoriesAction
  | OtherAction;
