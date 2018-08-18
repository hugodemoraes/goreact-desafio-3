/**
 * Types
 */

export const Types = {
  SHOW_TOAST: 'toast/SHOW_TOAST',
  SUCCESS: 'toast/SUCCESS',
  ERROR: 'toast/ERROR',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  type: 'default',
  message: '',
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  showToast: (type, message) => ({
    type: Types.SHOW_TOAST,
    payload: { type, message },
  }),
};
