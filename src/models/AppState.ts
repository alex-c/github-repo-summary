import { User } from './User';
import { Repository } from './Repository';
import { LanguageStatistics } from './LanguageStatistics';
import { StarsStatistics } from './StarsStatistics';
import { Sorting } from '../constants/Sorting';

export type AppState = {
  user: User,
  repositories: Repository[],
  sorting: Sorting,
  language_statistics: LanguageStatistics,
  stars_statistics: StarsStatistics,
};
