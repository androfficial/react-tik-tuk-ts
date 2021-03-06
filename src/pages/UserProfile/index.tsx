/* eslint-disable react/jsx-props-no-spreading */
import { User } from 'components';
import useTypesSelector from 'hooks/useTypesSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  fetchUserProfileInfo,
  fetchUserProfilePosts,
  setBottomIsLoaded,
  setTopIsLoaded,
} from 'store/actions/userProfile';

const UserProfile = () => {
  const { uniqueName } = useParams() as { uniqueName: string };
  const dispatch = useDispatch();
  const [userInfo, userPosts, topIsLoaded, bottomIsLoaded] = useTypesSelector(
    ({ userProfile }) => [
      userProfile.userInfo,
      userProfile.userPosts,
      userProfile.topIsLoaded,
      userProfile.bottomIsLoaded,
    ]
  );

  useEffect(() => {
    dispatch(fetchUserProfileInfo(uniqueName));
    dispatch(fetchUserProfilePosts());
    return () => {
      dispatch(setTopIsLoaded(false));
      dispatch(setBottomIsLoaded(false));
    };
  }, [uniqueName, dispatch]);

  return (
    <User
      userInfo={userInfo}
      userPosts={userPosts}
      topIsLoaded={topIsLoaded}
      bottomIsLoaded={bottomIsLoaded}
    />
  );
};

export default UserProfile;
