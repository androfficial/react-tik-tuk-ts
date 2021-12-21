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
      const userInfo = action.payload;

      const filteredUserInfo = {
        followerCount: userInfo.stats.followerCount,
        followingCount: userInfo.stats.followingCount,
        heartCount: userInfo.stats.heartCount,
        avatar: userInfo.user.avatarLarger,
        nickName: userInfo.user.nickname,
        description: userInfo.user.signature,
        userName: userInfo.user.uniqueId,
        verified: userInfo.user.verified,
        bioLink: userInfo.user.bioLink && userInfo.user.bioLink.link,
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
