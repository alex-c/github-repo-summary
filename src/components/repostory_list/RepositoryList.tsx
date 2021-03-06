import React, { useState } from 'react';
import { Card, Elevation, Button, HTMLTable, ButtonGroup, Popover, Position } from '@blueprintjs/core';
import { Repository } from '../../models/Repository';
import { IconNames } from '@blueprintjs/icons';
import { useDispatch } from 'react-redux';
import { Sorting } from '../../constants/Sorting';
import { changeSorting } from '../../actions/thunkActionCreators';
import { sortingDisplayText, sortingIconName, paginateRepositories } from './helpers';
import SortingOptions from './SortingOptions';
import RepositoryView from './RepositoryView';
import PaginationControls from './PaginationControls';
import { Pagination } from '../../models/Pagination';

interface RepositoryListProps {
  repositories: Repository[];
  sorting: Sorting;
  pagination: Pagination;
}

function RepositoryList(props: RepositoryListProps) {
  const { repositories, sorting, pagination } = props;
  const dispatch = useDispatch();
  const [viewMode, setViewMode] = useState('tiles');

  const toggleViewMode = () => {
    setViewMode(viewMode === 'tiles' ? 'table' : 'tiles');
  };

  const changeSortingHandler = (sorting: Sorting) => () => {
    dispatch(changeSorting(sorting));
  };

  const paginatedRepositories = paginateRepositories(repositories, pagination);

  return (
    repositories.length > 0 && (
      <Card id="repository-list" elevation={Elevation.TWO}>
        <div id="repository-list-header" className="clearfix">
          <span id="repository-list-title">Repositories</span>
          <div id="repository-list-controls">
            <ButtonGroup>
              <Popover
                content={<SortingOptions handler={changeSortingHandler} />}
                position={Position.BOTTOM}
                usePortal={true}
                portalContainer={document.body}
              >
                <Button
                  text={'Sorting: ' + sortingDisplayText(sorting)}
                  icon={sortingIconName(sorting)}
                  rightIcon={IconNames.CARET_DOWN}
                />
              </Popover>
              <Button
                text={viewMode === 'tiles' ? 'View table' : 'View tiles'}
                onClick={toggleViewMode}
                icon={viewMode === 'tiles' ? IconNames.TH : IconNames.GRID_VIEW}
              />
            </ButtonGroup>
          </div>
        </div>
        {viewMode === 'tiles' ? (
          <div id="repository-list-cards-container">
            {paginatedRepositories.map((repository, index) => (
              <RepositoryView repository={repository} key={index} />
            ))}
          </div>
        ) : (
          <div id="repository-list-table-container">
            <HTMLTable bordered={true} striped={true}>
              <thead>
                <tr>
                  <th>Repository</th>
                  <th>Description</th>
                  <th>Language</th>
                  <th>Stars</th>
                  <th>Forked</th>
                  <th>Open Issues</th>
                  <th>Last Updated</th>
                </tr>
              </thead>
              <tbody>
                {paginatedRepositories.map((repository, index) => (
                  <tr key={index}>
                    <td>
                      <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                        {repository.name}
                      </a>
                    </td>
                    <td>{repository.description}</td>
                    <td>{repository.language}</td>
                    <td>{repository.stargazers_count}</td>
                    <td>{repository.forks}</td>
                    <td>{repository.open_issues}</td>
                    <td>{new Date(repository.updated_at).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </HTMLTable>
          </div>
        )}
        <PaginationControls pagination={pagination}></PaginationControls>
      </Card>
    )
  );
}

export default RepositoryList;
