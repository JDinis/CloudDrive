import { combineReducers } from 'redux'
import { FileReducer } from './FileReducer'
import { LoginReducer } from './LoginReducer';
import { UserReducer } from './UserReducer';
import { StorageReducer } from './StorageReducer';

export default combineReducers({
    Files: FileReducer,
    Login: LoginReducer,
    Users: UserReducer,
    Storage: StorageReducer
});