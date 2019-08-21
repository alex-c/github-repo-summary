import { Repository } from '../../models/Repository';
import { Sorting } from '../../constants/Sorting';

const sortRepositories = (repositories: Repository[], sorting: Sorting) => {
  let sortedRepositories = repositories.slice();
  switch (sorting) {
    case Sorting.Alphabetical:
      sortedRepositories = sortedRepositories.sort((r1, r2) =>
        r1.name.toLowerCase() < r2.name.toLowerCase() ? -1 : r1.name.toLowerCase() > r2.name.toLowerCase() ? 1 : 0,
      );
      break;
    case Sorting.ByStars:
      sortedRepositories = sortedRepositories.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
      break;
    case Sorting.ByUpdateDate:
      sortedRepositories = sortedRepositories.sort((r1, r2) =>
        new Date(r1.updated_at) <= new Date(r2.updated_at) ? 1 : -1,
      );
      break;
    default:
      break;
  }
  return sortedRepositories;
};

export default sortRepositories;
