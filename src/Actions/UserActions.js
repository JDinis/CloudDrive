import { GETUSER, EDITUSER, DELUSER } from './Types'
import axios from 'axios';

export const getUser = () => dispatch => {
    axios.get('/Profile')
        .then(response => {
            dispatch({
                type: GETUSER,
                payload: response.data
            })
        })
}

export const editUser = (username, password, email, firstName, lastName, profilePic, admin, next) => dispatch => {
    axios.put('/Profile/Edit', {
        username: username,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName,
        profilePic: profilePic,
        admin: admin
    })
        .then(response => {
            dispatch({
                type: EDITUSER,
                payload: response.data,
                callback: next()
            })
        })
}

export const deleteUser = () => dispatch => {
    axios.delete('/Profile/Del')
        .then(response => {
            dispatch({
                type: DELUSER,
                payload: response.data
            })
        })
}