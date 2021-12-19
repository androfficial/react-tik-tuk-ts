/* eslint-disable default-param-last */
import { FeedAction, FeedStatePosts, Types } from 'types/feed';

const initialState = {
  posts: [] as FeedStatePosts[],
  isLoaded: false,
  errorApi: false,
};

type FeedInitialState = typeof initialState;

const feed = (state = initialState, action: FeedAction): FeedInitialState => {
  switch (action.type) {
    case Types.SET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case Types.SET_IS_LOADED:
      return {
        ...state,
        isLoaded: action.payload,
      };
    case Types.SET_ERROR_API:
      return {
        ...state,
        errorApi: action.payload,
      };
    default:
      return state;
  }
};

export default feed;
