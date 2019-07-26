import { ActionTypes } from "./actions/actionTypes";
import { ActionTypeKeys } from "./actions/actionTypeKeys";
import { AppState } from "./models/AppState";

export default function reducer(state:AppState = {userName: ""}, action:ActionTypes) {
    switch (action.type) {
        case ActionTypeKeys.SET_USER:
            return {userName: action.userName};
        default:
            return state;
    }
}