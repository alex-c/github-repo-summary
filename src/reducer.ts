import { ActionTypes } from './actions/actionTypes';
import { ActionTypeKeys } from './actions/actionTypeKeys';
import { AppState } from './models/AppState';
import { Sorting } from './constants/Sorting';

const initialState = {
  user: {
    login: '',
    name: '',
    bio: '',
    location: '',
    company: '',
    blog: '',
    email: '',
    avatarUrl: '',
    htmlUrl: '',
    publicRepos: 0,
    publicGists: 0,
    followers: 0,
    following: 0,
    reposUrl: '',
  },
  repositories: [],
  sorting: Sorting.Alphabetical,
  language_statistics: null,
  stars_statistics: null,
};

export default function reducer(state: AppState = initialState, action: ActionTypes) {
  switch (action.type) {
    case ActionTypeKeys.SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case ActionTypeKeys.SET_REPOSITORIES:
      return {
        ...state,
        repositories: action.repositories,
      };
    case ActionTypeKeys.SET_STATISTICS:
      return {
        ...state,
        language_statistics: action.languageStatistics,
        stars_statistics: action.starsStatistics,
      };
    case ActionTypeKeys.SET_SORTING:
      return {
        ...state,
        sorting: action.sorting,
      };
    default:
      return state;
  }
}
