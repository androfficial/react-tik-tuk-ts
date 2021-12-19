import numberFormatting from '../../../services/numberFormatting';

interface IUserBottomPosts {
  cover: string;
  video: string;
  views: number;
}

interface IUserBottom {
  posts: IUserBottomPosts[];
}

const UserBottom = ({ posts }: IUserBottom) => (
  <div className='user-profile__bottom'>
    <ul className='user-profile__posts'>
      {posts &&
        posts.map(({ cover, video, views }, i) => (
          <li key={`${i}: ${views}`} className='user-profile__post post-user'>
            <video
              muted
              loop
              controls
              playsInline
              preload='metadata'
              poster={cover}
              src={video}
              className='post-user__video _author-video'
            />
            <div className='post-user__stats'>
              <svg
                width='18'
                height='18'
                viewBox='0 0 48 48'
                fill='#fff'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M16 10.554V37.4459L38.1463 24L16 10.554ZM12 8.77702C12 6.43812 14.5577 4.99881 16.5569 6.21266L41.6301 21.4356C43.5542 22.6038 43.5542 25.3962 41.6301 26.5644L16.5569 41.7873C14.5577 43.0012 12 41.5619 12 39.223V8.77702Z'
                />
              </svg>
              <strong className='post-user__stats-views'>
                {numberFormatting(views)}
              </strong>
            </div>
          </li>
        ))}
    </ul>
    {/* <div className="user-profile__pagination">
<Pagination />
</div> */}
  </div>
);

export default UserBottom;