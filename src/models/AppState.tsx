import { User } from './User';
import { Repository } from './Repository';
import { LanguageStatistics } from './LanguageStatistics';

export type AppState = {
  user: User,
  repositories: Repository[],
  language_statistics: LanguageStatistics,
};
