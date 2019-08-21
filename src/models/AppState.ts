import { User } from './User';
import { Repository } from './Repository';
import { LanguageStatistics } from './LanguageStatistics';
import { StarsStatistics } from './StarsStatistics';
import { Sorting } from '../constants/Sorting';
import { Favorite } from './Favorite';

export type AppState = {
  user: User,
  favorites: Favorite[],
  loading_state: boolean,
  language_statistics: LanguageStatistics,
  stars_statistics: StarsStatistics,
  repositories: Repository[],
  sorting: Sorting,
};
