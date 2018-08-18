import { all, takeLatest } from 'redux-saga/effects';

import { Types as MarkerTypes } from '../ducks/markers';
import { Types as ToastTypes } from '../ducks/toast';
import { addMarker } from './markers';
import { showToast } from './toast';

export default function* rootSaga() {
  yield all([
    takeLatest(MarkerTypes.ADD_REQUEST, addMarker),
    takeLatest(ToastTypes.SHOW_TOAST, showToast),
  ]);
}
