export enum Types {
  SET_USER_INFO = 'USER_PROFILE@SET:USER_INFO',
  SET_IS_LOADED = 'USER_PROFILE@SET:IS_LOADED',
  SET_ERROR_API = 'USER_PROFILE@SET:ERROR_API',
}

export type UserProfilePosts = {
  cover: string;
  video: string;
  views: number;
};

export type UserProfileInfo = {
  followerCount: number;
  followingCount: number;
  heartCount: number;
  avatar: string;
  nickName: string;
  description: string;
  userName: string;
  verified: boolean;
  bioLink: string;
  posts: UserProfilePosts[];
};

type UserProfileSetUserInfo = {
  type: Types.SET_USER_INFO;
  payload: UserProfileInfo;
};

type UserProfileSetIsLoaded = {
  type: Types.SET_IS_LOADED;
  payload: boolean;
};

type UserProfileSetErrorApi = {
  type: Types.SET_ERROR_API;
  payload: boolean;
};

export type UserProfileAction =
  | UserProfileSetUserInfo
  | UserProfileSetIsLoaded
  | UserProfileSetErrorApi;
