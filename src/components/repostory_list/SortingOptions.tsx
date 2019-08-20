import React from 'react';
import { Sorting } from '../../constants/Sorting';
import { Menu } from '@blueprintjs/core';
import SortingOption from './SortingOption';

interface SortingOptionProps {
  handler: Function;
}

function SortingOptions(props: SortingOptionProps) {
  const { handler } = props;
  return (
    <Menu>
      <SortingOption sorting={Sorting.Alphabetical} handler={handler} />
      <SortingOption sorting={Sorting.ByStars} handler={handler} />
      <SortingOption sorting={Sorting.ByUpdateDate} handler={handler} />
    </Menu>
  );
}

export default SortingOptions;
