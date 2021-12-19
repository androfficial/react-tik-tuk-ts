import numberFormatting from '../../../../services/numberFormatting';

interface IUserStats {
  followerCount: number;
  followingCount: number;
  heartCount: number;
}

const UserStats = ({
  followingCount,
  followerCount,
  heartCount,
}: IUserStats) => (
  <div className='user-profile__stats stats-user'>
    <div className='stats-user__info stats-user__info--following'>
      <strong className='stats-user__count'>
        {numberFormatting(followingCount)}
      </strong>
      <span className='stats-user__desc'>Подписки</span>
    </div>
    <div className='stats-user__info stats-user__info--follower'>
      <strong className='stats-user__count'>
        {numberFormatting(followerCount)}
      </strong>
      <span className='stats-user__desc'>Подписчики</span>
    </div>
    <div className='stats-user__info stats-user__info--likes'>
      <strong className='stats-user__count'>
        {numberFormatting(heartCount)}
      </strong>
      <span className='stats-user__desc'>Лайки</span>
    </div>
  </div>
);

export default UserStats;
