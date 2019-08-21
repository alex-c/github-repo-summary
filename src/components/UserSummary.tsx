import React from 'react';
import { Card, Elevation, Tag } from '@blueprintjs/core';
import { User } from '../models/User';
import { IconNames } from '@blueprintjs/icons';
import IconItem from './IconItem';

interface UserSummaryProps {
  user: User;
}

function UserSummary(props: UserSummaryProps) {
  let { user } = props;
  return (
    <Card id="user-summary" elevation={Elevation.TWO}>
      <div id="avatar">
        <img src={user.avatar_url} alt="Github user avatar" />
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
        <Tag icon={IconNames.GIT_BRANCH}>Repositories: {user.public_repos}</Tag>
        <Tag icon={IconNames.DOCUMENT}>Gists: {user.public_gists}</Tag>
        <Tag icon={IconNames.USER}>Followers: {user.followers}</Tag>
        <Tag icon={IconNames.USER}>Following: {user.following}</Tag>
      </div>
    </Card>
  );
}

export default UserSummary;
