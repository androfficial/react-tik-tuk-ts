import { Types, UserProfileInfo } from 'types/userProfile';

import mainAPI from '../../api/api';

export const setUserInfo = (payload: UserProfileInfo) => ({
  type: Types.SET_USER_INFO,
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

export const fetchUserProfile = (uniqueName) => async (dispatch) => {
  const response = await mainAPI.getUserInfo(uniqueName);
  if (response) {
    dispatch(setUserInfo(response));
    dispatch(setIsLoaded(true));
  } else {
    dispatch(setErrorApi(true));
  }
};
