import {combineReducers} from 'redux'
import {FileReducer} from './FileReducer'
import {LoginReducer} from './LoginReducer';
import {StorageReducer} from './StorageReducer';

export default combineReducers({
    Files: FileReducer,
    Users: LoginReducer,
    Storage: StorageReducer
});