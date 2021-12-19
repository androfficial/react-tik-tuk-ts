import { combineReducers } from 'redux';

import feed from './feed';
import userProfile from './userProfile';

export const rootReducers = combineReducers({
  feed,
  userProfile,
});

export type RootState = ReturnType<typeof rootReducers>;
