/* eslint-disable default-param-last */
import {
  Types,
  UserProfileAction,
  UserProfileInfo,
} from '../../types/userProfile';

const initialState = {
  userInfo: {} as UserProfileInfo,
  isLoaded: false,
  errorApi: false,
};

type UserProfileInitialState = typeof initialState;

const userProfile = (
  state = initialState,
  action: UserProfileAction
): UserProfileInitialState => {
  switch (action.type) {
    case Types.SET_USER_INFO:
      return {
        ...state,
        userInfo: action.payload,
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

export default userProfile;
