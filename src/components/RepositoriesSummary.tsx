import React from 'react';
import {
    Card,
    Elevation
} from "@blueprintjs/core";
import { Repository } from '../models/Repository';

function RepositoriesSummary(props: any) {
    let repositories:Repository[] = props.repositories;
    return (
        <div>
            {repositories.length > 0 ?
                <Card id="repositories-summary" elevation={Elevation.TWO}>
                    Repositories: {repositories.length}
                </Card>
            : <span></span>}
        </div>
    );
}

export default RepositoriesSummary;