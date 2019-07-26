import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../models/AppState';
import {
    Card,
    Elevation,
    Icon,
    Intent
} from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';

function Summary() {
    const userName:string = useSelector((state:AppState) => state.userName)
    return (
        <main className="viewport">
            <Card elevation={Elevation.TWO}>
                <Icon icon={IconNames.WARNING_SIGN} iconSize={Icon.SIZE_LARGE} intent={Intent.WARNING} ></Icon>
                <b> Under construction!</b>
                <p>Current user name: {userName}</p>
            </Card>
        </main>
    );
}

export default Summary;