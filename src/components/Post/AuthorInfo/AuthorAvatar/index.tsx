import { Link } from 'react-router-dom';

interface IAuthorAvatar {
  avatar: string;
  uniqueName: string;
}

const AuthorAvatar = ({ avatar, uniqueName }: IAuthorAvatar) => (
  <Link to={`/@${uniqueName}`} className='item-feed__avatar _author-avatar'>
    <img src={avatar} alt={uniqueName} />
  </Link>
);

export default AuthorAvatar;
