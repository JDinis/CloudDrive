import { LOGIN, LOGOUT, SIGNUP } from '../Actions/Types'

const initialState = {
  User: {},
  LoggedIn: false,
  Error: null
};

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      action.callback()
      return {
        ...state,
        User: action.payload.User,
        LoggedIn: action.payload.Error.err === null ? true : false,
        Error: action.payload.Error.err !== null ? action.payload.Error : null
      };
    case SIGNUP:
      action.callback()
      return {
        ...state,
        User: action.payload.User,
        LoggedIn: true,
        Error: null
      };
    case LOGOUT:
      return {
        ...state,
        User: null,
        LoggedIn: false,
        Error: null
      };
    default:
      return state;
  }
}