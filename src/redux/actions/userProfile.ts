import { Dispatch } from 'redux';
import {
  Types,
  UserProfileAction,
  UserProfileInfo,
  UserProfileSetErrorApi,
  UserProfileSetIsLoaded,
  UserProfileSetUserInfo,
} from 'types/userProfile';

import mainAPI from '../../api/api';

export const setUserInfo = (
  payload: UserProfileInfo
): UserProfileSetUserInfo => ({
  type: Types.SET_USER_INFO,
  payload,
});

export const setIsLoaded = (payload: boolean): UserProfileSetIsLoaded => ({
  type: Types.SET_IS_LOADED,
  payload,
});

export const setErrorApi = (payload: boolean): UserProfileSetErrorApi => ({
  type: Types.SET_ERROR_API,
  payload,
});

type UserProfileDispatch = Dispatch<UserProfileAction>;

export const fetchUserProfile =
  (uniqueName: string) => async (dispatch: UserProfileDispatch) => {
    const response = await mainAPI.getUserInfo(uniqueName);
    if (response) {
      dispatch(setUserInfo(response));
      dispatch(setIsLoaded(true));
    } else {
      dispatch(setErrorApi(true));
    }
  };
