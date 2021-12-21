/* eslint-disable react/jsx-props-no-spreading */
import classNames from 'classnames';
import { Preloader } from 'components';
import { UserProfileInfoState, UserProfilePostsState } from 'types/userProfile';

import UserBottom from './UserBottom';
import UserTop from './UserTop';

type TUser = {
  userInfo: UserProfileInfoState;
  userPosts: UserProfilePostsState[];
  topIsLoaded: boolean;
  bottomIsLoaded: boolean;
};

const User = ({ userInfo, userPosts, topIsLoaded, bottomIsLoaded }: TUser) => {
  return (
    <article
      className={classNames(
        'main__user-profile user-profile',
        !bottomIsLoaded && 'user-profile__center-loading'
      )}
    >
      {topIsLoaded ? <UserTop {...userInfo} /> : <Preloader />}
      {bottomIsLoaded ? <UserBottom posts={userPosts} /> : <Preloader />}
    </article>
  );
};

export default User;
