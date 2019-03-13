import { ADDFILES, LISTFILES, DELETEFILE } from './Types'
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