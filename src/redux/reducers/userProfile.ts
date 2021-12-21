/* eslint-disable default-param-last */
import {
  Types,
  UserProfileAction,
  UserProfileInfoState,
  UserProfilePostsState,
} from 'types/userProfile';

const initialState = {
  userInfo: {} as UserProfileInfoState,
  userPosts: [] as UserProfilePostsState[],
  topIsLoaded: false,
  bottomIsLoaded: false,
  errorApi: false,
};

type UserProfileInitialState = typeof initialState;

const userProfile = (
  state = initialState,
  action: UserProfileAction
): UserProfileInitialState => {
  switch (action.type) {
    case Types.SET_USER_INFO: {
      const data = action.payload;

      const filteredUserInfo = {
        followerCount: data.stats.followerCount,
        followingCount: data.stats.followingCount,
        heartCount: data.stats.heartCount,
        avatar: data.user.avatarLarger,
        nickName: data.user.nickname,
        description: data.user.signature,
        userName: data.user.uniqueId,
        verified: data.user.verified,
        bioLink: data.user.bioLink && data.user.bioLink.link,
      };

      return {
        ...state,
        userInfo: filteredUserInfo,
      };
    }
    case Types.SET_USER_POSTS: {
      const data = action.payload;

      const filteredUserPosts = data.map((obj) => ({
        cover: obj.covers.origin,
        video: obj.videoUrl,
        views: obj.playCount,
      }));

      return {
        ...state,
        userPosts: filteredUserPosts,
      };
    }
    case Types.SET_TOP_IS_LOADED:
      return {
        ...state,
        topIsLoaded: action.payload,
      };
    case Types.SET_BOTTOM_IS_LOADED:
      return {
        ...state,
        bottomIsLoaded: action.payload,
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
