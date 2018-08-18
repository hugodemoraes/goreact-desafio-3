import { combineReducers } from 'redux';

import markers from './markers';
import userModal from './userModal';
import toast from './toast';

export default combineReducers({
  markers,
  userModal,
  toast,
});
