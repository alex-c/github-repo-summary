import React from 'react';
import { Sorting } from '../../constants/Sorting';
import { MenuItem } from '@blueprintjs/core';
import { sortingDisplayText, sortingIconName } from './helpers';

interface SortingOptionProps {
  sorting: Sorting;
  handler: Function;
}

function SortingOption(props: SortingOptionProps) {
  const { sorting, handler } = props;
  return <MenuItem text={sortingDisplayText(sorting)} icon={sortingIconName(sorting)} onClick={handler(sorting)} />;
}

export default SortingOption;
