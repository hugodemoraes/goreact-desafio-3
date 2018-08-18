/**
 * Types
 */

export const Types = {
  ADD_REQUEST: 'markers/ADD_REQUEST',
  ADD_SUCCESS: 'markers/ADD_SUCCESS',
  ADD_FAILURE: 'markers/ADD_FAILURE',
  REMOVE: 'markers/REMOVE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  loading: false,
  data: [],
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return { ...state, loading: true };
    case Types.ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };
    case Types.ADD_FAILURE:
      return { ...state, loading: false };
    case Types.REMOVE:
      return {
        ...state,
        data: state.data.filter(marker => marker.user.id !== action.payload.userId),
      };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  addMarkerRequest: user => ({
    type: Types.ADD_REQUEST,
    payload: { user },
  }),

  addMarkerSuccess: data => ({
    type: Types.ADD_SUCCESS,
    payload: { data },
  }),

  addMarkerFailure: () => ({
    type: Types.ADD_FAILURE,
  }),

  removeMarker: userId => ({
    type: Types.REMOVE,
    payload: { userId },
  }),
};
