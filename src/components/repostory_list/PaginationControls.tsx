import React from 'react';
import { Pagination } from '../../models/Pagination';

interface PaginationProps {
  pagination: Pagination;
}

function PaginationControls(props: PaginationProps) {
  return <div id="pagination">Pagination</div>;
}

export default PaginationControls;
