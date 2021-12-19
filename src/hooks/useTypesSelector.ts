import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../redux/reducers/index';

const useTypesSelector: TypedUseSelectorHook<RootState> = useSelector;

export default useTypesSelector;
