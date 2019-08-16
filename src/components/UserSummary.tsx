import React from 'react';
import { Card, Elevation, Icon, Tag } from '@blueprintjs/core';
import { User } from '../models/User';
import { IconNames } from '@blueprintjs/icons';

function UserSummary(props: any) {
  let user: User = props.user;
  return (
    <Card id="user-summary" elevation={Elevation.TWO}>
      <div id="avatar">
        <img src={user.avatarUrl} alt="Github user avatar" />
      </div>
      <p>
        <b>{user.name}</b> /{' '}
        <a href={user.htmlUrl} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </p>
      <p>{user.bio}</p>
      <p>
        {user.location != null ? (
          <span>
            <Icon icon={IconNames.MAP_MARKER} /> {user.location}{' '}
          </span>
        ) : (
          ''
        )}
        {user.company != null ? (
          <span>
            <Icon icon={IconNames.OFFICE} /> {user.company}{' '}
          </span>
        ) : (
          ''
        )}
        {user.email != null ? (
          <span>
            <Icon icon={IconNames.ENVELOPE} /> {user.email}
          </span>
        ) : (
          ''
        )}
        {user.blog !== '' ? (
          <span>
            <Icon icon={IconNames.LINK} />{' '}
            <a href={user.blog} target="_blank" rel="noopener noreferrer">
              {user.blog}
            </a>
          </span>
        ) : (
          ''
        )}
      </p>
      <div>
        <Tag icon={IconNames.GIT_BRANCH}>Repositories: {user.publicRepos}</Tag>
        <Tag icon={IconNames.DOCUMENT}>Gists: {user.publicGists}</Tag>
        <Tag icon={IconNames.USER}>Followers: {user.followers}</Tag>
        <Tag icon={IconNames.USER}>Following: {user.following}</Tag>
      </div>
    </Card>
  );
}

export default UserSummary;
