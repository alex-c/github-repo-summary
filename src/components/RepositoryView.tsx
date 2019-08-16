import React from 'react';
import { Repository } from '../models/Repository';
import { Icon } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

function RepositoryView(props: any) {
  const repository: Repository = props.repository;
  return (
    <div className="repository">
      <div className="repository-header">
        <Icon icon={repository.fork ? IconNames.GIT_BRANCH : IconNames.GIT_REPO} />
        <a href={repository.html_url} target="_blank" rel="noopener noreferrer">
          {repository.name}
        </a>
        {repository.language !== null ? (
          <div className="repository-tag">
            <Icon icon={IconNames.CODE} />
            {repository.language}
          </div>
        ) : (
          ''
        )}
      </div>
      <div>
        <i>{repository.description}</i>
      </div>
      <div className="repository-footer">
        <Icon icon={IconNames.STAR} />
        {repository.stargazers_count}
        <Icon icon={IconNames.EYE_OPEN} />
        {repository.watchers_count}
        <Icon icon={IconNames.GIT_BRANCH} />
        {repository.forks}
      </div>
    </div>
  );
}

export default RepositoryView;
