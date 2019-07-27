import React from 'react';
import {
    Card,
    Elevation,
    Icon,
    Intent
} from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';

function UserSummary(props: any) {
    let userName:string = props.userName;
    return (
        <Card elevation={Elevation.TWO}>
            <Icon icon={IconNames.WARNING_SIGN} iconSize={Icon.SIZE_LARGE} intent={Intent.WARNING} ></Icon>
            <b> Under construction!</b>
            <p>Current user name: {userName}</p>
        </Card>
    );
}

export default UserSummary;