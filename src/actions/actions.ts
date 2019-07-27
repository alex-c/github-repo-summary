import { ActionTypeKeys } from "./actionTypeKeys";
import { User } from "../models/User";
import { Repository } from "../models/Repository";

export interface SetUserAction {
    type: ActionTypeKeys.SET_USER;
    user: User;
}

export interface SetRepositoriesAction {
    type: ActionTypeKeys.SET_REPOSITORIES;
    repositories: Repository[];
}

export interface OtherAction {
    type: ActionTypeKeys.OTHER_ACTION;
}