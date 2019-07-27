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
        avatarUrl: "",
        htmlUrl: "",
        publicRepos: 0,
        publicGists: 0,
        followers: 0,
        following: 0,
        reposUrl: ""
    }
};

export default function reducer(state:AppState = initialState, action:ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.SET_USER:
            return {user: action.user};
        default:
            return state;
    }
}