import { Dispatch } from 'redux';
import {
  FeedAction,
  FeedPost,
  FeedSetErrorApi,
  FeedSetIsLoaded,
  FeedSetPosts,
  Types,
} from 'types/feed';

import mainAPI from '../../api/api';

export const setPosts = (payload: FeedPost[]): FeedSetPosts => ({
  type: Types.SET_POSTS,
  payload,
});

export const setIsLoaded = (payload: boolean): FeedSetIsLoaded => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): FeedSetErrorApi => ({
  type: Types.SET_ERROR_API,
  payload,
});

type FeedDispatch = Dispatch<FeedAction>;

export const fetchPosts = () => async (dispatch: FeedDispatch) => {
  const response = await mainAPI.getPosts();
  if (response) {
    dispatch(setPosts(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};
