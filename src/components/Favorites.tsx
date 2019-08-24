import React, { useState } from 'react';
import { Icon, TagInput, Tag, Intent, Tooltip, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../models/AppState';
import { setFavorites } from '../actions/actionCreators';
import { removeUserFromFavorites, searchUser, addUserToFavoritesIfExists } from '../actions/thunkActionCreators';

function Favorites() {
  const favorites = useSelector((state: AppState) => state.favorites);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const loadFavoriteHandler = (name: string) => () => {
    dispatch(searchUser(name));
  };

  const toggleEditModeHandler = () => {
    setEditMode(!editMode);
  };

  const removeFavoriteHandler = (name: string) => {
    if (favorites.length === 1 && favorites.map(f => f.name).includes(name)) {
      setEditMode(false);
    }
    dispatch(removeUserFromFavorites({ name }));
  };

  const removeAllFavoritesHandler = () => {
    setEditMode(false);
    dispatch(setFavorites([]));
  };

  const addFavoriteHandler = (values: string[]) => {
    const newUser = values.shift();
    if (newUser) {
      dispatch(addUserToFavoritesIfExists(newUser));
    }
  };

  return (
    <>
      {favorites.length > 0 && (
        <div id="favorites">
          {editMode ? (
            <TagInput
              leftIcon={IconNames.STAR}
              values={favorites.map(favorite => favorite.name)}
              onRemove={removeFavoriteHandler}
              onAdd={addFavoriteHandler}
              addOnPaste={true}
              rightElement={
                <>
                  <Tooltip content="Remove all">
                    <Button
                      icon={IconNames.TRASH}
                      intent={Intent.DANGER}
                      minimal={true}
                      onClick={removeAllFavoritesHandler}
                    />
                  </Tooltip>
                  <Tooltip content="Done editing">
                    <Button
                      icon={IconNames.TICK}
                      intent={Intent.SUCCESS}
                      minimal={true}
                      onClick={toggleEditModeHandler}
                    />
                  </Tooltip>
                </>
              }
            />
          ) : (
            <>
              <div id="favorites-controls">
                <Tooltip content="Edit">
                  <Icon icon={IconNames.EDIT} onClick={toggleEditModeHandler} />
                </Tooltip>
              </div>
              {favorites.map((favorite, index) => (
                <Tag
                  intent={Intent.PRIMARY}
                  minimal={true}
                  interactive={true}
                  key={index}
                  onClick={loadFavoriteHandler(favorite.name)}
                >
                  {favorite.name}
                </Tag>
              ))}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Favorites;
