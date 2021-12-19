import { Dispatch } from 'redux';
import { FeedAction, FeedStatePosts, Types } from 'types/feed';

import mainAPI from '../../api/api';

export const setPosts = (payload: FeedStatePosts[]) => ({
  type: Types.SET_POSTS,
  payload,
});

export const setIsLoaded = (payload: boolean) => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean) => ({
  type: Types.SET_ERROR_API,
  payload,
});

export const fetchPosts = (page) => async (dispatch: Dispatch<FeedAction>) => {
  const response = await mainAPI.getPosts(page);
  if (response) {
    dispatch(setPosts(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};
