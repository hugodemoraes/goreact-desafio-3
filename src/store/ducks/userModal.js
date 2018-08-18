/**
 * Types
 */

export const Types = {
  OPEN: 'userModal/OPEN',
  CLOSE: 'userModal/CLOSE',
};

/**
 * Reducers
 */

const INITIAL_STATE = {
  open: false,
  mapCoordinates: {},
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.OPEN: {
      const { latitude, longitude } = action.payload.mapCoordinates;

      return {
        open: true,
        mapCoordinates: {
          latitude,
          longitude,
        },
      };
    }
    case Types.CLOSE:
      return { open: false };
    default:
      return state;
  }
}

/**
 * Actions Creators
 */

export const Creators = {
  openUserModal: mapCoordinates => ({
    type: Types.OPEN,
    payload: { mapCoordinates },
  }),

  closeUserModal: () => ({
    type: Types.CLOSE,
  }),
};
