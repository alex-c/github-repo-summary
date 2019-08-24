import React, { useState } from 'react';
import { InputGroup, Intent, Tooltip, Button, AnchorButton } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import { useSelector, useDispatch } from 'react-redux';
import { AppState } from '../models/AppState';
import { searchUser } from '../actions/thunkActionCreators';

function Navbar() {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState('');
  const currentUserName = useSelector((state: AppState) => state.user.login);

  const searchHandler = () => {
    if (userName !== '' && userName !== currentUserName) {
      dispatch(searchUser(userName));
    }
  };

  const resetHandler = () => {
    setUserName('');
  };

  return (
    <div id="navbar">
      <div className="viewport">
        <div id="navbar-title">Github Repo Summary</div>
        <div>
          <InputGroup
            placeholder="Github user name"
            rightElement={
              <>
                <Tooltip content="Search">
                  <Button icon={IconNames.SEARCH} intent={Intent.PRIMARY} minimal={true} onClick={searchHandler} />
                </Tooltip>
                <Tooltip content="Clear">
                  <Button icon={IconNames.TRASH} intent={Intent.DANGER} minimal={true} onClick={resetHandler} />
                </Tooltip>
              </>
            }
            value={userName}
            onChange={(event: { target: any }) => setUserName(event.target.value)}
            onKeyPress={event => {
              if (event.charCode === 13) {
                searchHandler();
              }
            }}
          />
        </div>
        <div id="navbar-right">
          <AnchorButton
            icon="git-repo"
            text="Github"
            href="https://github.com/alex-c/github-repo-summary"
            target="_blank"
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
