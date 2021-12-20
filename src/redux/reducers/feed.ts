/* eslint-disable default-param-last */
import { FeedAction, FeedStatePosts, Types } from 'types/feed';

import stringFormatting from '../../services/stringFormatting';

const initialState = {
  posts: [] as FeedStatePosts[],
  isLoaded: false,
  errorApi: false,
};

type FeedInitialState = typeof initialState;

const feed = (state = initialState, action: FeedAction): FeedInitialState => {
  switch (action.type) {
    case Types.SET_POSTS: {
      const posts = action.payload;

      const filteredPosts = posts.map((obj) => ({
        uniqueName: obj.authorMeta.name,
        nickName: obj.authorMeta.nickName,
        verified: obj.authorMeta.verified,
        avatar: obj.authorMeta.avatar,
        likesCount: obj.diggCount,
        commentsCount: obj.commentCount,
        hashtags:
          obj.hashtags && obj.hashtags.map((hashtag) => `#${hashtag.name}`),
        text: obj.text && stringFormatting(obj.text),
        video: obj.videoUrl,
        cover: obj.covers.origin,
      }));

      return {
        ...state,
        posts: filteredPosts,
      };
    }
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

export default feed;
