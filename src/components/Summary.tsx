import React from 'react';
import { useSelector } from 'react-redux';
import { AppState } from '../models/AppState';
import UserSummary from './UserSummary';
import { User } from '../models/User';

function Summary() {
    const user:User = useSelector((state:AppState) => state.user)
    return (
        <main className="viewport">
            <UserSummary userName={user.name}></UserSummary>
        </main>
    );
}

export default Summary;