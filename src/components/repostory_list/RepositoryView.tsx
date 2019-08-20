import React from 'react';
import { IconNames } from '@blueprintjs/icons';
import { Tooltip, Position } from '@blueprintjs/core';
import IconItem from '../IconItem';
import { Repository } from '../../models/Repository';

interface RepositoryView {
  repository: Repository;
}

function RepositoryView(props: RepositoryView) {
  const { repository } = props;
  return (
    <div className="repository">
      <div className="repository-header">
        <IconItem
          icon={repository.fork ? IconNames.GIT_BRANCH : IconNames.GIT_REPO}
          text={repository.name}
          link={repository.html_url}
        />
        {repository.language && (
          <div className="repository-tag">
            <IconItem icon={IconNames.CODE} text={repository.language} />
          </div>
        )}
      </div>
      <div>
        <i>{repository.description}</i>
      </div>
      <div className="repository-footer">
        {repository.stargazers_count !== 0 && <IconItem icon={IconNames.STAR} text={repository.stargazers_count} />}
        {repository.forks !== 0 && <IconItem icon={IconNames.GIT_BRANCH} text={repository.forks} />}
        {repository.open_issues !== 0 && <IconItem icon={IconNames.ISSUE} text={repository.open_issues} />}
        <div className="repository-footer-right">
          <Tooltip content={repository.updated_at} boundary="viewport" position={Position.TOP}>
            <IconItem icon={IconNames.UPDATED} text={new Date(repository.updated_at).toLocaleDateString()} />
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default RepositoryView;
