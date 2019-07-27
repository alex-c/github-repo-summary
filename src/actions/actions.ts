import { ActionTypeKeys } from "./actionTypeKeys";
import { User } from "../models/User";

export interface SetUserAction {
    type: ActionTypeKeys.SET_USER;
    user: User;
}

export interface OtherAction {
    type: ActionTypeKeys.OTHER_ACTION;
}