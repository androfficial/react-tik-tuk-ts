import { Dispatch } from 'redux';
import { FeedPost } from 'types/feed';
import { Types, UserProfileAction, UserProfileInfo } from 'types/userProfile';

import mainAPI from '../../api/api';

export const setUserInfo = (payload: UserProfileInfo): UserProfileAction => ({
  type: Types.SET_USER_INFO,
  payload,
});

export const setUserPosts = (payload: FeedPost[]): UserProfileAction => ({
  type: Types.SET_USER_POSTS,
  payload,
});

export const setTopIsLoaded = (payload: boolean): UserProfileAction => ({
  type: Types.SET_TOP_IS_LOADED,
  payload,
});

export const setBottomIsLoaded = (payload: boolean): UserProfileAction => ({
  type: Types.SET_BOTTOM_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): UserProfileAction => ({
  type: Types.SET_ERROR_API,
  payload,
});

type UserProfileDispatch = Dispatch<UserProfileAction>;

export const fetchUserProfileInfo =
  (uniqueName: string) => async (dispatch: UserProfileDispatch) => {
    const response = await mainAPI.getUserInfo(uniqueName);
    if (response) {
      dispatch(setUserInfo(response));
      dispatch(setTopIsLoaded(true));
    } else {
      dispatch(setErrorApi(true));
    }
  };

export const fetchUserProfilePosts =
  () => async (dispatch: UserProfileDispatch) => {
    const response = await mainAPI.getUserPosts();
    if (response) {
      dispatch(setUserPosts(response));
      dispatch(setBottomIsLoaded(true));
    } else {
      dispatch(setErrorApi(true));
    }
  };
