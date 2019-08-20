import { Repository } from '../../models/Repository';
import { Sorting } from '../../constants/Sorting';

const sortRepositories = (repositories: Repository[], sorting: Sorting) => {
  if (sorting === Sorting.Alphabetical) {
    return repositories.sort((r1, r2) =>
      r1.name.toLowerCase() < r2.name.toLowerCase() ? -1 : r1.name.toLowerCase() > r2.name.toLowerCase() ? 1 : 0,
    );
  } else {
    return repositories.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
  }
};

export default sortRepositories;
