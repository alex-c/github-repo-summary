import { ActionTypes } from "./actions/actionTypes";
import { ActionTypeKeys } from "./actions/actionTypeKeys";
import { AppState } from "./models/AppState";

const initialState = {
    user: {
        login: "",
        name: "",
        bio: "",
        location: "",
        company: "",
        blog: "",
        email: "",
        avatarUrl: "",
        htmlUrl: "",
        publicRepos: 0,
        publicGists: 0,
        followers: 0,
        following: 0,
        reposUrl: ""
    },
    repositories: []
};

export default function reducer(state:AppState = initialState, action:ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.SET_USER:
            return {
                ...state,
                user: action.user
            };
        default:
            return state;
    }
}