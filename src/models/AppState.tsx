import { User } from './User';
import { Repository } from './Repository';

export type AppState = {
  user: User,
  repositories: Repository[],
};
