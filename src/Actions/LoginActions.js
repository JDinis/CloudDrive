import { LOGOUT, LOGIN, SIGNUP } from './Types'
import axios from 'axios';

export const login = (username, password, callback) => dispatch => {
  axios.post('/Login', {
    username: username,
    password: password,
  })
    .then(user => {
      dispatch({
        type: LOGIN,
        payload: user.data,
        callback
      })
    })
}

export const signup = (username, password, callback) => dispatch => {
  axios.post('/Signup', {
    username: username,
    password: password,
  })
    .then(user => {
      dispatch({
        type: SIGNUP,
        payload: user.data,
        callback
      })
    })
}

export const logout = (username, password) => dispatch => {
  axios.post('/Logout', {
    username: username,
    password: password,
  })
    .then(user => {
      dispatch({
        type: LOGOUT
      })
    })
}