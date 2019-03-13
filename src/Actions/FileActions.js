import { ADDFILES, LISTFILES, DELETEUSERFILE, LISTUSERFILES, DELETEFILE } from './Types'
import axios from 'axios';

export const listFiles = () => dispatch => {
    axios.get('/files')
        .then(files => {
            dispatch({
                type: LISTFILES,
                payload: files.data
            })
        });
}

export const listUsersFiles = (username) => dispatch => {
    axios.get('files/list/' + username)
        .then(files => {
            dispatch({
                type: LISTUSERFILES,
                payload: files.data
            })
        });
}

export const deleteUsersFiles = (username, filename, next) => dispatch => {
    axios.delete('/files/' + username + '/' + filename)
        .then(files => {
            dispatch({
                type: DELETEUSERFILE,
                payload: files.data,
                callback: next()
            })
        });
}

export const deleteFile = (filename, next) => dispatch => {
    axios.delete('/files/' + filename)
        .then(files => {
            dispatch({
                type: DELETEFILE,
                payload: files.data,
                callback: next()
            })
        });
}