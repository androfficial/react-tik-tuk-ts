export enum Types {
  SET_POSTS = 'FEED@SET:POSTS',
  SET_ERROR_API = 'FEED@SET:ERROR_API',
  SET_IS_LOADED = 'FEED@SET:IS_LOADED',
}

export type FeedAuthorMeta = {
  avatar: string;
  digg: number;
  fans: number;
  following: number;
  heart: number;
  id: string;
  name: string;
  nickName: string;
  secUid: string;
  signature: string;
  verified: boolean;
  video: number;
};

export type FeedCovers = {
  default: string;
  dynamic: string;
  origin: string;
};

export type FeedEffectStickers = {
  id: string;
  name: string;
};

export type FeedHashtags = {
  cover: string;
  id: string;
  name: string;
  title: string;
};

export type FeedMusicMeta = {
  coverLarge: string;
  coverMedium: string;
  coverThumb: string;
  duration: number;
  musicAlbum: string;
  musicAuthor: string;
  musicId: string;
  musicName: string;
  musicOriginal: boolean;
  playUrl: string;
};

export type FeedVideoMeta = {
  duration: number;
  height: number;
  width: number;
};

export type FeedPost = {
  authorMeta: FeedAuthorMeta;
  commentCount: number;
  covers: FeedCovers;
  createTime: number;
  diggCount: number;
  downloaded: boolean;
  effectStickers: [] | FeedEffectStickers[];
  hashtags: [] | FeedHashtags[];
  id: string;
  mentions: [] | string[];
  musicMeta: FeedMusicMeta;
  playCount: number;
  secretID: string;
  shareCount: number;
  text: string;
  videoApiUrlNoWaterMark: string;
  videoMeta: FeedVideoMeta;
  videoUrl: string;
  videoUrlNoWaterMark: string;
  webVideoUrl: string;
};

export type FeedStatePosts = {
  uniqueName: string;
  nickName: string;
  verified: boolean;
  avatar: string;
  likesCount: number;
  commentsCount: number;
  hashtags: [] | string[];
  text: string;
  video: string;
  cover: string;
};

export type FeedSetPosts = {
  type: Types.SET_POSTS;
  payload: FeedPost[];
};

export type FeedSetIsLoaded = {
  type: Types.SET_IS_LOADED;
  payload: boolean;
};

export type FeedSetErrorApi = {
  type: Types.SET_ERROR_API;
  payload: boolean;
};

export type FeedAction = FeedSetPosts | FeedSetIsLoaded | FeedSetErrorApi;
