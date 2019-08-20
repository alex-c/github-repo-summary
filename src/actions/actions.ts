import { ActionTypeKeys } from './actionTypeKeys';
import { User } from '../models/User';
import { Repository } from '../models/Repository';
import { LanguageStatistics } from '../models/LanguageStatistics';
import { StarsStatistics } from '../models/StarsStatistics';
import { Sorting } from '../constants/Sorting';

export interface SetUserAction {
  type: ActionTypeKeys.SET_USER;
  user: User;
}

export interface SetRepositoriesAction {
  type: ActionTypeKeys.SET_REPOSITORIES;
  repositories: Repository[];
}

export interface SortRepositoriesAction {
  type: ActionTypeKeys.SORT_REPOSITORIES;
  sorting: Sorting;
  repositories: Repository[];
}

export interface SetStatisticsAction {
  type: ActionTypeKeys.SET_STATISTICS;
  languageStatistics: LanguageStatistics;
  starsStatistics: StarsStatistics;
}

export interface OtherAction {
  type: ActionTypeKeys.OTHER_ACTION;
}
