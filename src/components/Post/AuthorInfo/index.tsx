import AuthorAvatar from './AuthorAvatar';
import AuthorDescription from './AuthorDescription';
import AuthorName from './AuthorName';

interface IAuthorInfo {
  avatar: string;
  hashtags: string[];
  uniqueName: string;
  nickName: string;
  text: string;
  verified: boolean;
}

const AuthorInfo = ({
  avatar,
  hashtags,
  uniqueName,
  nickName,
  text,
  verified,
}: IAuthorInfo) => (
  <div className='item-feed__header'>
    <AuthorAvatar avatar={avatar} uniqueName={uniqueName} />
    <div className='item-feed__author-info'>
      <AuthorName
        uniqueName={uniqueName}
        nickName={nickName}
        verified={verified}
      />
    </div>
    <AuthorDescription text={text} hashtags={hashtags} />
  </div>
);

export default AuthorInfo;
