import {LOGOUT, LOGIN} from './Types'
import axios from 'axios';

export const login = (username,password) => dispatch => {
  console.log(username,password)
  axios.post('/Login', {
    username: username,
    password: password,
  })
  .then(user=>{ dispatch({
      type: LOGIN,
      payload: user.data
    })
  })
}

export const logout = (user) => dispatch => {
  dispatch({
      type: LOGOUT,
      payload: user
  })
}