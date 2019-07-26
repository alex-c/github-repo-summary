import { ActionTypeKeys } from "./actionTypeKeys";

export interface SetUserAction {
    type: ActionTypeKeys.SET_USER;
    userName: string;
}

export interface OtherAction {
    type: ActionTypeKeys.OTHER_ACTION;
}