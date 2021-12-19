import AuthorInfo from './AuthorInfo';
import AuthorStats from './AuthorStats';
import AuthorVideo from './AuthorVideo';

interface IPost {
  avatar: string;
  commentsCount: number;
  hashtags: string[];
  likesCount: number;
  uniqueName: string;
  nickName: string;
  text: string;
  verified: boolean;
  video: string;
  cover: string;
}

const Post = ({
  avatar,
  commentsCount,
  hashtags,
  likesCount,
  uniqueName,
  nickName,
  text,
  verified,
  video,
  cover,
}: IPost) => (
  <article className='feed__item item-feed'>
    <AuthorInfo
      avatar={avatar}
      hashtags={hashtags}
      uniqueName={uniqueName}
      nickName={nickName}
      text={text}
      verified={verified}
    />
    <div className='item-feed__wrapper'>
      <AuthorVideo cover={cover} video={video} />
      <AuthorStats likesCount={likesCount} commentsCount={commentsCount} />
    </div>
  </article>
);

export default Post;
