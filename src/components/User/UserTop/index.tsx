import { UserProfileInfoState } from 'types/userProfile';

import UserBioLinks from './UserBioLinks';
import UserDescription from './UserDescription';
import UserInfo from './UserInfo';
import UserStats from './UserStats';

const UserTop = ({
  avatar,
  userName,
  nickName,
  verified,
  followingCount,
  followerCount,
  heartCount,
  description,
  bioLink,
}: UserProfileInfoState) => (
  <div className='user-profile__top'>
    <UserInfo
      avatar={avatar}
      userName={userName}
      nickName={nickName}
      verified={verified}
    />
    <div className='user-profile__footer'>
      <UserStats
        followingCount={followingCount}
        followerCount={followerCount}
        heartCount={heartCount}
      />
      <UserDescription description={description} />
      <UserBioLinks bioLink={bioLink} />
    </div>
  </div>
);

export default UserTop;
