import { LOGIN, LOGOUT, SIGNUP } from '../Actions/Types'

const initialState = {
  User: {},
  LoggedIn: false,
  Error: null
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      action.callback()
      return {
        ...state,
        User: JSON.parse(action.payload).User,
        LoggedIn: (JSON.parse(JSON.parse(action.payload).Error).err === null) ? true : false,
        Error: (JSON.parse(JSON.parse(action.payload).Error).err !== null) ? JSON.parse(action.payload).Error : null
      };
    case SIGNUP:
      action.callback()
      return {
        ...state,
        User: JSON.parse(action.payload).User,
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