import React, { useState } from 'react';
import { Card, Elevation, Button, HTMLTable, ButtonGroup } from '@blueprintjs/core';
import { Repository } from '../models/Repository';
import RepositoryView from './RepositoryView';
import { IconNames } from '@blueprintjs/icons';

interface RepositoryListProps {
  repositories: Repository[];
}

const sortRepositories = (repositories: Repository[], sorting: string) => {
  if (sorting === 'alphabetical') {
    return repositories.sort((r1, r2) =>
      r1.name.toLowerCase() < r2.name.toLowerCase() ? -1 : r1.name.toLowerCase() > r2.name.toLowerCase() ? 1 : 0,
    );
  } else {
    return repositories.sort((r1, r2) => r2.stargazers_count - r1.stargazers_count);
  }
};

function RepositoryList(props: RepositoryListProps) {
  let { repositories } = props;
  const [viewMode, setViewMode] = useState('tiles');
  const [sorting, setSorting] = useState('alphabetical');

  const toggleViewMode = () => {
    setViewMode(viewMode === 'tiles' ? 'table' : 'tiles');
  };

  const toggleSorting = () => {
    const newSorting = sorting === 'alphabetical' ? 'stars' : 'alphabetical';
    setSorting(newSorting);
  };

  repositories = sortRepositories(repositories, sorting);

  return (
    <>
      {repositories.length > 0 && (
        <Card id="repository-list" elevation={Elevation.TWO}>
          <div id="repository-list-header">
            <div id="repository-list-controls">
              <ButtonGroup>
                <Button
                  text={sorting === 'alphabetical' ? 'Sort by stars' : 'Sort alphabetically'}
                  onClick={toggleSorting}
                  icon={sorting === 'alphabetical' ? IconNames.SORT_DESC : IconNames.SORT_ALPHABETICAL}
                />
                <Button
                  text={viewMode === 'tiles' ? 'View table' : 'View tiles'}
                  onClick={toggleViewMode}
                  icon={viewMode === 'tiles' ? IconNames.TH : IconNames.GRID_VIEW}
                />
              </ButtonGroup>
            </div>
            <h2>Repositories</h2>
          </div>
          {viewMode === 'tiles' ? (
            <div id="repository-list-cards-container">
              {repositories.map((repository, index) => (
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
                    <th>Watchers</th>
                    <th>Forked</th>
                  </tr>
                </thead>
                <tbody>
                  {repositories.map((repository, index) => (
                    <tr key={index}>
                      <td>
                        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
                          {repository.name}
                        </a>
                      </td>
                      <td>{repository.description}</td>
                      <td>{repository.language}</td>
                      <td>{repository.stargazers_count}</td>
                      <td>{repository.watchers_count}</td>
                      <td>{repository.forks}</td>
                    </tr>
                  ))}
                </tbody>
              </HTMLTable>
            </div>
          )}
        </Card>
      )}
    </>
  );
}

export default RepositoryList;
