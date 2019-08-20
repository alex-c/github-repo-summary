import { Repository } from '../../models/Repository';
import { Sorting } from '../../constants/Sorting';

const sortRepositories = (repositories: Repository[], sorting: Sorting) => {
  switch (sorting) {
    case Sorting.Alphabetical:
      return repositories.sort((r1, r2) =>
        r1.name.toLowerCase() < r2.name.toLowerCase() ? -1 : r1.name.toLowerCase() > r2.name.toLowerCase() ? 1 : 0,
      );
    case Sorting.ByStars:
      return repositories.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
    case Sorting.ByUpdateDate:
      return repositories.sort((r1, r2) => (new Date(r1.updated_at) <= new Date(r2.updated_at) ? 1 : -1));
    default:
      return repositories;
  }
};

export default sortRepositories;
