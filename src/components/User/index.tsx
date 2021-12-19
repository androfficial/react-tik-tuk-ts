/* eslint-disable react/jsx-props-no-spreading */
import UserBottom from './UserBottom';
import UserTop from './UserTop';

interface IUserPosts {
  cover: string;
  video: string;
  views: number;
}

interface IUser {
  posts: IUserPosts[];
}

const User = ({ posts, ...obj }: IUser) => (
  <article className='main__user-profile user-profile'>
    <UserTop {...obj} />
    <UserBottom posts={posts} />
  </article>
);

export default User;
