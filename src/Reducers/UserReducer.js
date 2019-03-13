import { GETUSERS, ADDUSER, GETUSER, EDITUSER, DELUSER } from '../Actions/Types'

const initialState = {
  Users: {},
  User: {},
  Success: false,
  Error: null
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETUSERS:
      return {
        ...state,
        Users: action.payload.users,
        Error: null
      };
    case ADDUSER:
      return {
        ...state,
        User: action.payload.user,
        Error: null
      };
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