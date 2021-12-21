import { FeedPost } from './feed';

export enum Types {
  SET_USER_INFO = 'USER_PROFILE@SET:USER_INFO',
  SET_USER_POSTS = 'USER_PROFILE@SET:USER_POSTS',
  SET_TOP_IS_LOADED = 'USER_PROFILE@SET:TOP_IS_LOADED',
  SET_BOTTOM_IS_LOADED = 'USER_PROFILE@SET:BOTTOM_IS_LOADED',
  SET_ERROR_API = 'USER_PROFILE@SET:ERROR_API',
}

export type UserProfileItemList = {
  id: string;
};

export type UserProfileStats = {
  diggCount: number;
  followerCount: number;
  followingCount: number;
  heart: number;
  heartCount: number;
  videoCount: number;
};

export type UserProfileBioLink = {
  link: string;
  risk: number;
};

export type UserProfileDetails = {
  avatarLarger: string;
  avatarMedium: string;
  avatarThumb: string;
  bioLink?: UserProfileBioLink;
  commentSetting: number;
  createTime: number;
  duetSetting: number;
  ftc: boolean;
  id: string;
  isADVirtual: boolean;
  nickname: string;
  openFavorite: boolean;
  privateAccount: boolean;
  relation: number;
  roomId: string;
  secUid: string;
  secret: boolean;
  shortId: string;
  signature: string;
  stitchSetting: number;
  uniqueId: string;
  verified: boolean;
};

export type UserProfileInfo = {
  itemList: UserProfileItemList[];
  stats: UserProfileStats;
  user: UserProfileDetails;
};

export type UserProfileInfoState = {
  followerCount: number;
  followingCount: number;
  heartCount: number;
  avatar: string;
  nickName: string;
  description: string;
  userName: string;
  verified: boolean;
  bioLink?: string;
};

export type UserProfilePostsState = {
  cover: string;
  video: string;
  views: number;
};

export type UserProfileSetUserInfo = {
  type: Types.SET_USER_INFO;
  payload: UserProfileInfo;
};

export type UserProfileSetUserPosts = {
  type: Types.SET_USER_POSTS;
  payload: FeedPost[];
};

export type UserProfileSetTopIsLoaded = {
  type: Types.SET_TOP_IS_LOADED;
  payload: boolean;
};

export type UserProfileSetBottomIsLoaded = {
  type: Types.SET_BOTTOM_IS_LOADED;
  payload: boolean;
};

export type UserProfileSetErrorApi = {
  type: Types.SET_ERROR_API;
  payload: boolean;
};

export type UserProfileAction =
  | UserProfileSetUserInfo
  | UserProfileSetUserPosts
  | UserProfileSetTopIsLoaded
  | UserProfileSetBottomIsLoaded
  | UserProfileSetErrorApi;
