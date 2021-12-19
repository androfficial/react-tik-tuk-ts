/* eslint-disable react/jsx-props-no-spreading */
import useTypesSelector from 'hooks/useTypesSelector';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { Preloader, User } from '../../components';
import { fetchUserProfile, setIsLoaded } from '../../redux/actions/userProfile';

const UserProfile = () => {
  const { uniqueName } = useParams();
  const dispatch = useDispatch();
  const [userInfo, isLoaded] = useTypesSelector(({ userProfile }) => [
    userProfile.userInfo,
    userProfile.isLoaded,
  ]);

  useEffect(() => {
    dispatch(fetchUserProfile(uniqueName));
    return () => dispatch(setIsLoaded(false));
  }, [uniqueName, dispatch]);

  return isLoaded ? <User {...userInfo} /> : <Preloader />;
};

export default UserProfile;
