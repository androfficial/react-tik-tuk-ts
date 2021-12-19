/* eslint-disable react/jsx-no-useless-fragment */
interface IUserBioLinks {
  bioLink: string;
}

const UserBioLinks = ({ bioLink }: IUserBioLinks) => (
  <>
    {bioLink && (
      <div className='user-profile__share'>
        <a
          href={bioLink}
          className='user-profile__bio-link'
          target='_blank'
          rel='noreferrer'
        >
          {bioLink}
        </a>
      </div>
    )}
  </>
);

export default UserBioLinks;
