import { ADDUSER, GETUSERS, GETUSER, EDITUSER, DELUSER } from './Types'
import axios from 'axios';

export const getUsers = () => dispatch => {
    axios.get('/users/list')
        .then(response => {
            dispatch({
                type: GETUSERS,
                payload: response.data
            })
        })
}

export const getUser = () => dispatch => {
    axios.get('/Profile')
        .then(response => {
            dispatch({
                type: GETUSER,
                payload: response.data
            })
        })
}

export const getUserByName = (username) => dispatch => {
    axios.get('/users/' + username)
        .then(response => {
            dispatch({
                type: GETUSER,
                payload: response.data
            })
        })
}

export const addUser = () => dispatch => {
    axios.post('/users/add')
        .then(response => {
            dispatch({
                type: ADDUSER,
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

export const deleteUserByName = (username) => dispatch => {
    axios.delete('/Profile/Del/' + username)
        .then(response => {
            dispatch({
                type: DELUSER,
                payload: response.data
            })
        })
}