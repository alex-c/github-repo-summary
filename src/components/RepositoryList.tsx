import React, { useState } from 'react';
import { Card, Elevation, Button, HTMLTable } from '@blueprintjs/core';
import { Repository } from '../models/Repository';
import RepositoryView from './RepositoryView';
import { IconNames } from '@blueprintjs/icons';

function RepositoryList(props: any) {
  const repositories: Repository[] = props.repositories;

  const [viewMode, setViewMode] = useState('tiles');

  const toggleViewMode = () => {
    viewMode === 'tiles' ? setViewMode('table') : setViewMode('tiles');
  };

  return (
    <div>
      {repositories.length > 0 ? (
        <Card id="repository-list" elevation={Elevation.TWO}>
          <div id="repository-list-header">
            <div id="repository-list-controls">
              <Button
                text={viewMode === 'tiles' ? 'View table' : 'View tiles'}
                onClick={toggleViewMode}
                icon={viewMode === 'tiles' ? IconNames.TH : IconNames.GRID_VIEW}
              />
            </div>
            <h2>Repositories</h2>
          </div>
          <div id="repository-list-content">
            {viewMode === 'tiles' ? (
              repositories.map((repository, index) => <RepositoryView repository={repository} key={index} />)
            ) : (
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
            )}
          </div>
        </Card>
      ) : (
        <span />
      )}
    </div>
  );
}

export default RepositoryList;
