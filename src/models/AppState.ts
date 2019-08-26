import { User } from './User';
import { Repository } from './Repository';
import { LanguageStatistics } from './LanguageStatistics';
import { StarsStatistics } from './StarsStatistics';
import { Favorite } from './Favorite';
import { Paginaton } from './Pagination';
import { Sorting } from '../constants/Sorting';

export type AppState = {
  user: User,
  favorites: Favorite[],
  loading_state: boolean,
  language_statistics: LanguageStatistics,
  stars_statistics: StarsStatistics,
  repositories: Repository[],
  sorting: Sorting,
  pagination: Paginaton,
};
