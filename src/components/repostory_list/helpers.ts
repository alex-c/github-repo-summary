import { Sorting } from '../../constants/Sorting';
import { IconNames, IconName } from '@blueprintjs/icons';
import { Repository } from '../../models/Repository';
import { Pagination } from '../../models/Pagination';

const sortingDisplayText = (sorting: Sorting): string => {
  let text: string;
  switch (sorting) {
    case Sorting.Alphabetical:
      text = 'Alphabetically';
      break;
    case Sorting.ByStars:
      text = 'By stars';
      break;
    case Sorting.ByUpdateDate:
      text = 'Last updated';
      break;
    default:
      text = '?';
      break;
  }
  return text;
};

const sortingIconName = (sorting: Sorting): IconName => {
  let icon: IconName;
  switch (sorting) {
    case Sorting.Alphabetical:
      icon = IconNames.SORT_ALPHABETICAL;
      break;
    case Sorting.ByStars:
      icon = IconNames.SORT_NUMERICAL_DESC;
      break;
    case Sorting.ByUpdateDate:
      icon = IconNames.SORT_DESC;
      break;
    default:
      icon = IconNames.SORT_DESC;
      break;
  }
  return icon;
};

const paginateRepositories = (repositories: Repository[], pagination: Pagination): Repository[] => {
  const { items_per_page, current_page } = pagination;
  const pageLimit = items_per_page * current_page;
  return repositories.slice(pageLimit - items_per_page, pageLimit);
};

export { sortingDisplayText, sortingIconName, paginateRepositories };
