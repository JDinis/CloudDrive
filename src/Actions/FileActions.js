import { ADDFILES } from './Types'
import axios from 'axios';

export const listFiles = () => dispatch => {
    axios.get('/files')
        .then(files => {
            dispatch({
                type: ADDFILES,
                payload: files.data
            })
        });
}