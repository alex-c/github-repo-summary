import React from 'react';
import { Card, Elevation, Tag } from '@blueprintjs/core';
import { User } from '../models/User';
import { IconNames } from '@blueprintjs/icons';
import IconItem from './IconItem';

function UserSummary(props: any) {
  let user: User = props.user;
  return (
    <Card id="user-summary" elevation={Elevation.TWO}>
      <div id="avatar">
        <img src={user.avatarUrl} alt="Github user avatar" />
      </div>
      <p>
        <b>{user.name}</b> /&nbsp;
        <a href={user.htmlUrl} target="_blank" rel="noopener noreferrer">
          {user.login}
        </a>
      </p>
      <p>{user.bio}</p>
      <p>
        {user.location && <IconItem icon={IconNames.MAP_MARKER} text={user.location} />}
        {user.company && <IconItem icon={IconNames.OFFICE} text={user.company} />}
        {user.email && <IconItem icon={IconNames.ENVELOPE} text={user.email} />}
        {user.blog !== '' && <IconItem icon={IconNames.LINK} text={user.blog} link={user.blog} />}
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
