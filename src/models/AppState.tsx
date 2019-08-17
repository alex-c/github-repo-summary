import { User } from './User';
import { Repository } from './Repository';
import { LanguageStatistics } from './LanguageStatistics';
import { StarsStatistics } from './StarsStatistics';

export type AppState = {
  user: User,
  repositories: Repository[],
  language_statistics: LanguageStatistics,
  stars_statistics: StarsStatistics,
};
