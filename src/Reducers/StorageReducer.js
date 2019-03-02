import { REHYDRATE } from 'redux-persist';

const initialState = {
  User: null,
  LoggedIn: false,
  Error: null
};

export const StorageReducer = (state = initialState, action) => {
  switch (action.type) {

    case REHYDRATE:
      return {
        ...state,
        //User: (action.payload!==undefined && action.payload.User!==undefined)?action.payload.User:null,
        //LoggedIn:(action.payload!==undefined)?action.payload.LoggedIn:false
      };
    default:
      return state;
  }
}