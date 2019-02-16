import {LOGIN, LOGOUT} from '../Actions/Types'

const initialState = {
    User: {}
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { 
          ...state, 
          User: action.payload 
      };
      case LOGOUT:
        return { 
            ...state, 
            User: action.payload 
        };
    default:
      return state;
  }
}