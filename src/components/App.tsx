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
} from "@blueprintjs/core";
import Summary from './Summary';
import api from '../services/api';
import { IconNames } from '@blueprintjs/icons';
import { useDispatch } from 'react-redux';
import { ActionTypeKeys } from '../actions/actionTypeKeys';

function App() {
    const dispatch = useDispatch()

    const [userName, setUserName] = useState("");
    const [popoverVisible, setPopoverVisible] = useState(false);

    const handleSearch = () => {
        if (userName !== "") {
            api.getUser(userName)
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
                            reposUrl: result.repos_url
                        }
                    });
                    let numberOfRepos = result.public_repos;
                    let page = 1;
                    let repos:object[] = [];
                    while (numberOfRepos > 0) {
                        api.getUserRepositories(result.repos_url, page)
                            .then(result => {
                                repos.push(...result);
                                console.log(repos);
                            }).catch(error => {
                                alert("Error:" + error);
                            });
                            numberOfRepos -= 100;
                            page++;
                    }
                }).catch(() => {
                    setPopoverVisible(true);
                    setInterval(() => setPopoverVisible(false), 2000);
                });
        }
    }

    const inputButtons = (
        <span>
            <Tooltip content="Search">
                <Button
                    icon="search"
                    intent={Intent.PRIMARY}
                    minimal={true}
                    onClick={handleSearch}
                />
            </Tooltip>
            <Tooltip content="Clear">
                <Button
                    icon="cross"
                    intent={Intent.WARNING}
                    minimal={true}
                    onClick={() => setUserName("")}
                />
            </Tooltip>
        </span>
    );

    return (
        <div>
            <Navbar>
                <div className="viewport">
                    <Navbar.Group align={Alignment.LEFT}>
                        <Navbar.Heading>Github Repo Summary</Navbar.Heading>
                        <Navbar.Divider />
                        <Popover position={PopoverPosition.BOTTOM} isOpen={popoverVisible}>
                            <InputGroup
                                placeholder="Github user name"
                                rightElement={inputButtons}
                                value={userName}
                                onChange={(event: { target: any; }) => {setUserName(event.target.value)}}
                            />
                            <Card>
                                <Icon icon={IconNames.ERROR} intent={Intent.DANGER} style={{float: "left"}}></Icon>
                                <p>User <span style={{color: Colors.RED1}}>{userName}</span> could not be found!</p>
                            </Card>
                        </Popover>
                    </Navbar.Group>
                    <Navbar.Group align={Alignment.RIGHT}>
                        <AnchorButton icon="git-branch" text="Github" href="https://github.com/alex-c/github-repo-summary" target="_blank" />
                    </Navbar.Group>
                </div>
            </Navbar>
            <Summary></Summary>
        </div>
    );
}

export default App;