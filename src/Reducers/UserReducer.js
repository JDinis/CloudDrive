import { GETUSER, EDITUSER, DELUSER } from '../Actions/Types'

const initialState = {
  User: {},
  Success: false,
  Error: null
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSER:
      return {
        ...state,
        User: action.payload.user,
        Error: null
      };
    case EDITUSER:
      return {
        ...state,
        Success: action.payload.success,
      };
    case DELUSER:
      return {
        ...state,
        Success: action.payload.success,
        Error: null
      };
    default:
      return state;
  }
}