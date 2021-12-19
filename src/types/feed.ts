export enum Types {
  SET_POSTS = 'FEED@SET:POSTS',
  SET_ERROR_API = 'FEED@SET:ERROR_API',
  SET_IS_LOADED = 'FEED@SET:IS_LOADED',
}

export type FeedStatePosts = {
  uniqueName: string;
  nickName: string;
  verified: boolean;
  avatar: string;
  likesCount: number;
  commentsCount: number;
  hashtags: string[];
  text: string;
  video: string;
  cover: string;
};

type FeedSetPosts = {
  type: Types.SET_POSTS;
  payload: FeedStatePosts[];
};

type FeedSetIsLoaded = {
  type: Types.SET_IS_LOADED;
  payload: boolean;
};

type FeedErrorApi = {
  type: Types.SET_ERROR_API;
  payload: boolean;
};

export type FeedAction = FeedSetPosts | FeedSetIsLoaded | FeedErrorApi;
