import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import { User } from '../models/User';

function Summary() {
    const user:User = useSelector((state:AppState) => state.user, shallowEqual);
    return (
        <main className="viewport">
            <UserSummary user={user}></UserSummary>
        </main>
    );
}

export default Summary;