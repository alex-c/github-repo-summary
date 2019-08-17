import React from 'react';
import { Repository } from '../models/Repository';
import { IconNames } from '@blueprintjs/icons';
import IconItem from './IconItem';

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
        <IconItem icon={IconNames.STAR} text={repository.stargazers_count} />
        <IconItem icon={IconNames.EYE_OPEN} text={repository.watchers_count} />
        <IconItem icon={IconNames.GIT_BRANCH} text={repository.forks} />
      </div>
    </div>
  );
}

export default RepositoryView;
