import React from 'react';
import {
    Card,
    Elevation
} from "@blueprintjs/core";
import { Repository } from '../models/Repository';
import RepositoryView from './RepositoryView';

function RepositoryList(props: any) {
    const repositories:Repository[] = props.repositories;
    return (
        <div>
            {repositories.length > 0 ?
                <Card id="repository-list" elevation={Elevation.TWO}>
                    <b>All Repositories</b>
                    <div>{repositories.map((repository, index) => <RepositoryView repository={repository} key={index}></RepositoryView>)}</div>
                </Card>
            : <span></span>}
        </div>
    );
}

export default RepositoryList;