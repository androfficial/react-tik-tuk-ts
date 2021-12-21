/* eslint-disable react/jsx-no-useless-fragment */
type IUserDescription = {
  description: string;
};

const UserDescription = ({ description }: IUserDescription) => (
  <>
    {description && (
      <div className='user-profile__desc-wrapper'>
        <h2 className='user-profile__desc'>{description}</h2>
      </div>
    )}
  </>
);

export default UserDescription;
