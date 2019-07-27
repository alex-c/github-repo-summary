import React from 'react';
import {
    Card,
    Elevation,
    Icon,
    Colors,
    Tag
} from "@blueprintjs/core";
import { User } from '../models/User';
import { IconNames } from '@blueprintjs/icons';

function UserSummary(props: any) {
    let user:User = props.user;
    console.log(user);
    return (
        <div>
            {user.login !== "" ?
                <Card id="user-summary" elevation={Elevation.TWO}>
                    <div id="avatar"><img src={user.avatarUrl} alt="Github user avatar" /></div>
                    <p><b>{user.name}</b> / <a href={user.htmlUrl} target="_blank" rel="noopener noreferrer">{user.login}</a></p>
                    <p>{user.bio}</p>
                    <p>
                        {user.location != null ? (<span><Icon icon={IconNames.MAP_MARKER}></Icon> {user.location} </span>) : ""}
                        {user.company != null ? (<span><Icon icon={IconNames.OFFICE}></Icon> {user.company} </span>) : ""}
                        {user.blog !== "" ? (<span><Icon icon={IconNames.LINK}></Icon> <a href={user.blog} target="_blank" rel="noopener noreferrer">{user.blog}</a></span>) : ""}
                    </p>
                    <div>
                        <Tag icon={IconNames.GIT_BRANCH}>Repositories: {user.publicRepos}</Tag>
                        <Tag icon={IconNames.DOCUMENT}>Gists: {user.publicGists}</Tag>
                        <Tag icon={IconNames.USER}>Followers: {user.followers}</Tag>
                        <Tag icon={IconNames.USER}>Following: {user.following}</Tag>
                    </div>
                </Card>
            :
                <div id="default">
                    <div>
                        <Icon icon={IconNames.DISABLE} color={Colors.GRAY2}></Icon>
                        <p>Enter a Github user name in the search bar above!</p>
                    </div>
                </div>
            }
        </div>
    );
}

export default UserSummary;