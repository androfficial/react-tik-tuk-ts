/* eslint-disable react/jsx-no-useless-fragment */
type IUserBioLinks = {
  bioLink: string | undefined;
};

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
