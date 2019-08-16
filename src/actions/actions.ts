import { ActionTypeKeys } from './actionTypeKeys';
import { User } from '../models/User';
import { Repository } from '../models/Repository';
import { LanguageStatistics } from '../models/LanguageStatistics';

export interface SetUserAction {
  type: ActionTypeKeys.SET_USER;
  user: User;
}

export interface SetRepositoriesAction {
  type: ActionTypeKeys.SET_REPOSITORIES;
  repositories: Repository[];
}

export interface SetLanguageStatistics {
  type: ActionTypeKeys.SET_LANGUAGE_STATISTICS;
  statistics: LanguageStatistics;
}

export interface OtherAction {
  type: ActionTypeKeys.OTHER_ACTION;
}