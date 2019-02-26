import {LOGIN, LOGOUT} from '../Actions/Types'

const initialState = {
    User: {},
    LoggedIn: false,
    Error: null
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return { 
          ...state, 
          User: JSON.parse(action.payload).User,
          LoggedIn:(JSON.parse(action.payload).Error===undefined)?true:false,
          Error: (JSON.parse(action.payload).Error!==undefined)?JSON.parse(JSON.parse(action.payload).Error):null,
          
      };
      case LOGOUT:
        return { 
            ...state, 
            User: action.payload,
            LoggedIn: false
        };
    default:
      return state;
  }
}