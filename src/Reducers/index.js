import {combineReducers} from 'redux'
import {FileReducer} from './FileReducer'
import {LoginReducer} from './LoginReducer';

export default combineReducers({
    Files: FileReducer,
    Users: LoginReducer
});