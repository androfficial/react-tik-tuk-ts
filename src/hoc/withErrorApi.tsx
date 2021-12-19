/* eslint-disable react/jsx-props-no-spreading */
import useTypesSelector from 'hooks/useTypesSelector';

import { NotFound } from '../components';

const withErrorApi = (View) => {
  const AppWrapper = (props) => {
    const errorApi = useTypesSelector(({ feed }) => feed.errorApi);

    return errorApi ? <NotFound /> : <View {...props} />;
  };
  return AppWrapper;
};

export default withErrorApi;
