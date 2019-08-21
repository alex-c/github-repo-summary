import React from 'react';
import { Card, Elevation, Tag, Icon } from '@blueprintjs/core';
import { User } from '../models/User';
import { IconNames } from '@blueprintjs/icons';
import IconItem from './IconItem';
import { addUserToFavorites, removeUserFromFavorites } from '../actions/thunkActionCreators';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../models/AppState';

interface UserSummaryProps {
  user: User;
}

function UserSummary(props: UserSummaryProps) {
  const favorites = useSelector((state: AppState) => state.favorites);
  const { user } = props;
  const dispatch = useDispatch();

  const userIsFavorite = (): boolean => favorites.map(favorite => favorite.name).includes(user.login);

  const toggleFavoriteHandler = () => {
    if (userIsFavorite()) {
      dispatch(removeUserFromFavorites({ name: user.login }));
    } else {
      dispatch(addUserToFavorites({ name: user.login }));
    }
  };

  return (
    <Card id="user-summary" elevation={Elevation.TWO}>
      <div id="avatar">
        <img src={user.avatar_url} alt="Github user avatar" />
      </div>
      <div id="favorite">
        <Icon icon={userIsFavorite() ? IconNames.STAR : IconNames.STAR_EMPTY} onClick={toggleFavoriteHandler} />
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
