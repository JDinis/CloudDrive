import {LOGOUT, LOGIN} from './Types'
import axios from 'axios';

export const login = (username,password,callback) => dispatch => {
  console.log(username,password)
  axios.post('http://localhost:3001/Login',{
    username: username,
    password: password,
  })
  .then(user=>{ dispatch({
      type: LOGIN,
      payload: user.data,
      callback
    })
  })
}

export const logout = () => dispatch => {
  axios.get('http://localhost:3001/Logout')
  .then(user=>{ dispatch({
      type: LOGOUT
    })
  })
}