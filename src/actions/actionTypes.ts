import {
  SetUserAction,
  OtherAction,
  SetRepositoriesAction,
  SetLanguageStatisticsAction,
  SortRepositoriesAction,
} from './actions';

export type ActionTypes =
  | SetUserAction
  | SetRepositoriesAction
  | SetLanguageStatisticsAction
  | SortRepositoriesAction
  | OtherAction;
