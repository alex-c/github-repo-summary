import React from 'react';
import { Repository } from '../models/Repository';
import { Callout, Tag, Intent } from '@blueprintjs/core';

function RepositoryView(props:any) {
    const repository:Repository = props.repository;
    return (
        <div className="repository">
            <Callout>
                {repository.language !== null ? <Tag intent={Intent.PRIMARY}>{repository.language}</Tag> : ""}
                <span><a href={repository.html_url} target="_blank" rel="noopener noreferrer">{repository.name}</a> </span>
                <span>Stars: {repository.stargazers_count} </span>
                <span>Watchers: {repository.watchers_count} </span>
            </Callout>
        </div>
    );
}

export default RepositoryView;