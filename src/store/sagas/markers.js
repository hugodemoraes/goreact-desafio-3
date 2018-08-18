import { call, put, select } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as MarkerActions } from '../ducks/markers';
import { Creators as UserModalActions } from '../ducks/userModal';
import { Creators as ToastActions, Types as ToastTypes } from '../ducks/toast';

export function* addMarker(action) {
  try {
    const { latitude, longitude } = yield select(state => state.userModal.mapCoordinates);
    const { data } = yield call(api.get, `/users/${action.payload.user}`);

    const isDuplicated = yield select(state =>
      state.markers.data.find(marker => marker.user.id === data.id));

    if (isDuplicated) {
      yield put(ToastActions.showToast(ToastTypes.ERROR, 'Usuário duplicado.'));
      yield put(MarkerActions.addMarkerFailure());
    } else {
      const markerData = {
        user: {
          id: data.id,
          name: data.name,
          login: data.login,
          avatar_url: data.avatar_url,
        },
        latitude,
        longitude,
      };

      yield put(MarkerActions.addMarkerSuccess(markerData));
      yield put(ToastActions.showToast(ToastTypes.SUCCESS, 'Usuário adicionado com sucesso.'));
      yield put(UserModalActions.closeUserModal());
    }
  } catch (err) {
    yield put(ToastActions.showToast(ToastTypes.ERROR, 'Erro ao adicionar usuário.'));
    yield put(MarkerActions.markerFailure());
  }
}
