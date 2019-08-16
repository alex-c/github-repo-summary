import React, { useState } from 'react';

import {
  Alignment,
  Button,
  AnchorButton,
  Navbar,
  Intent,
  Tooltip,
  InputGroup,
  Popover,
  PopoverPosition,
  Card,
  Icon,
  Colors,
} from '@blueprintjs/core';
import Summary from './Summary';
import api from '../services/api';
import { IconNames } from '@blueprintjs/icons';
import { useDispatch } from 'react-redux';
import { ActionTypeKeys } from '../actions/actionTypeKeys';
import { Repository } from '../models/Repository';

function App() {
  const dispatch = useDispatch();

  const [userName, setUserName] = useState('');
  const [popoverVisible, setPopoverVisible] = useState(false);

  const handleSearch = () => {
    if (userName !== '') {
      api
        .getUser(userName)
        .then(result => {
          dispatch({
            type: ActionTypeKeys.SET_USER,
            user: {
              login: result.login,
              name: result.name,
              bio: result.bio,
              location: result.location,
              company: result.company,
              blog: result.blog,
              email: result.email,
              avatarUrl: result.avatar_url,
              htmlUrl: result.html_url,
              publicRepos: result.public_repos,
              publicGists: result.public_gists,
              followers: result.followers,
              following: result.following,
              reposUrl: result.repos_url,
            },
          });
          let numberOfRepos = result.public_repos;
          let page = 1;
          let promises: object[] = [];
          while (numberOfRepos > 0) {
            promises.push(api.getUserRepositories(result.repos_url, page));
            numberOfRepos -= 100;
            page++;
          }
          Promise.all(promises).then((values: any[]) => {
            let repositories: Repository[] = [];
            for (let value of values) {
              repositories.push(...value.data);
            }
            processLoadedRepos(repositories);
          });
        })
        .catch(() => {
          setPopoverVisible(true);
          setInterval(() => setPopoverVisible(false), 2000);
        });
    }
  };

  const processLoadedRepos = (repositories: Repository[]) => {
    console.log(repositories); // TODO: calculate state, and push them to store
    dispatch({
      type: ActionTypeKeys.SET_REPOSITORIES,
      repositories: repositories,
    });
  };

  const inputButtons = (
    <span>
      <Tooltip content="Search">
        <Button icon="search" intent={Intent.PRIMARY} minimal={true} onClick={handleSearch} />
      </Tooltip>
      <Tooltip content="Clear">
        <Button icon="cross" intent={Intent.WARNING} minimal={true} onClick={() => setUserName('')} />
      </Tooltip>
    </span>
  );

  return (
    <div>
      <Navbar>
        <div className="viewport">
          <Navbar.Group align={Alignment.LEFT}>
            <Navbar.Heading>Github Repo Summary</Navbar.Heading>
          </Navbar.Group>
          <Navbar.Group align={Alignment.RIGHT}>
            <Popover position={PopoverPosition.BOTTOM} isOpen={popoverVisible}>
              <InputGroup
                placeholder="Github user name"
                rightElement={inputButtons}
                value={userName}
                onChange={(event: { target: any }) => setUserName(event.target.value)}
                onKeyPress={event => {
                  if (event.charCode === 13) {
                    handleSearch();
                  }
                }}
              />
              <Card>
                <Icon icon={IconNames.ERROR} intent={Intent.DANGER} style={{ float: 'left' }} />
                <p>
                  User <span style={{ color: Colors.RED1 }}>{userName}</span> could not be found!
                </p>
              </Card>
            </Popover>
            <Navbar.Divider />
            <AnchorButton
              icon="git-branch"
              text="Github"
              href="https://github.com/alex-c/github-repo-summary"
              target="_blank"
            />
          </Navbar.Group>
        </div>
      </Navbar>
      <Summary />
    </div>
  );
}

export default App;
