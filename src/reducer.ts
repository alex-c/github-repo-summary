import { ActionTypes } from './actions/actionTypes';
import { ActionTypeKeys } from './actions/actionTypeKeys';
import { AppState } from './models/AppState';
import { Sorting } from './constants/Sorting';
import localStorageKeys from './constants/LocalStorageKeys';

const initialState: AppState = {
  user: {
    login: '',
    name: '',
    bio: '',
    location: '',
    company: '',
    blog: '',
    email: '',
    avatar_url: '',
    html_url: '',
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    repos_url: '',
  },
  favorites: [],
  loading_state: false,
  language_statistics: null,
  stars_statistics: null,
  repositories: [],
  sorting: Sorting.Alphabetical,
  pagination: {
    items_per_page: 25,
    pages: 1,
    current_page: 0,
  },
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
    case ActionTypeKeys.SET_LOADING_STATE:
      return {
        ...state,
        loading_state: action.loading_state,
      };
    case ActionTypeKeys.SET_FAVORITES:
      localStorage.setItem(localStorageKeys.favorites, JSON.stringify(action.favorites));
      return {
        ...state,
        favorites: action.favorites,
      };
    case ActionTypeKeys.SET_PAGINATION:
      return {
        ...state,
        pagination: action.pagination,
      };
    default:
      return state;
  }
}
