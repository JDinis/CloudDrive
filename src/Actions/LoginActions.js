import { LOGOUT, LOGIN, SIGNUP, ISLOGGED } from './Types'
import axios from 'axios';

export const login = (username, password, callback) => dispatch => {
  axios.post('/Login', {
    username: username,
    password: password,
  })
    .then(response => {
      dispatch({
        type: LOGIN,
        payload: response.data,
        callback
      })
    })
}

export const signup = (username, password, callback) => dispatch => {
  axios.post('/Signup', {
    username: username,
    password: password,
  })
    .then(response => {
      dispatch({
        type: SIGNUP,
        payload: response.data,
        callback
      })
    })
}

export const logout = (username, password) => dispatch => {
  axios.post('/Logout', {
    username: username,
    password: password,
  })
    .then(response => {
      dispatch({
        type: LOGOUT
      })
    })
}

export const isLogged = (username) => dispatch => {
  axios.post("/islogged", {
    username: username
  }).then(response => {
    dispatch({
      type: ISLOGGED,
      payload: response.data
    })
  })
}