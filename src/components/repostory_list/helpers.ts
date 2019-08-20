import { Sorting } from '../../constants/Sorting';
import { IconNames, IconName } from '@blueprintjs/icons';

const sortingDisplayText = (sorting: Sorting) => {
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

const sortingIconName = (sorting: Sorting) => {
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

export { sortingDisplayText, sortingIconName };
