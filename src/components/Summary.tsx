import React from 'react';

import {
    Card,
    Elevation,
    Icon,
    Intent
} from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';

function Summary() {
    return (
        <main className="viewport">
            <Card elevation={Elevation.TWO}>
                <Icon icon={IconNames.WARNING_SIGN} iconSize={Icon.SIZE_LARGE} intent={Intent.WARNING} ></Icon>
                <b> Under construction!</b>
            </Card>
        </main>
    );
}

export default Summary;