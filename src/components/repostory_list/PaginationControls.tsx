import React from 'react';
import { ButtonGroup, Button } from '@blueprintjs/core';
import { Pagination } from '../../models/Pagination';
import { IconNames } from '@blueprintjs/icons';
import { useDispatch } from 'react-redux';
import { setPagination } from '../../actions/actionCreators';

interface PaginationProps {
  pagination: Pagination;
}

function PaginationControls(props: PaginationProps) {
  const { items_per_page, pages, current_page } = props.pagination;
  const dispatch = useDispatch();

  const changePageHandler = (page: number) => () => {
    dispatch(setPagination({ items_per_page, pages, current_page: page }));
  };

  return (
    <div id="pagination">
      <ButtonGroup>
        <Button
          icon={IconNames.DOUBLE_CHEVRON_LEFT}
          disabled={current_page === 1}
          onClick={changePageHandler(1)}
        ></Button>
        <Button
          icon={IconNames.CHEVRON_LEFT}
          disabled={current_page === 1}
          onClick={changePageHandler(current_page - 1)}
        ></Button>
        {current_page > 1 && <Button onClick={changePageHandler(current_page - 1)}>{current_page - 1}</Button>}
        <Button active={true}>{current_page}</Button>
        {current_page < pages && <Button onClick={changePageHandler(current_page + 1)}>{current_page + 1}</Button>}
        <Button
          icon={IconNames.CHEVRON_RIGHT}
          disabled={current_page === pages}
          onClick={changePageHandler(current_page + 1)}
        ></Button>
        <Button
          icon={IconNames.DOUBLE_CHEVRON_RIGHT}
          disabled={current_page === pages}
          onClick={changePageHandler(pages)}
        ></Button>
      </ButtonGroup>
    </div>
  );
}

export default PaginationControls;
