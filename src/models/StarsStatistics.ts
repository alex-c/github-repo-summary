import { Repository } from './Repository';

export type StarsStatistics = {
  max_stars_repo: Repository,
  average_stars: number,
  median_stars: number,
};
