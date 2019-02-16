import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
import Home from './Routes/Home';
import File from './Routes/File';
import LoginRoute from './Routes/Login';
import Error from './Routes/Error';
import Login from './Components/Login';
import jQuery from 'jquery';
import 'bootstrap';
window.$ = window.jQuery=jQuery;

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact render={Home}/>
              <Route path="/Login" render={Login}/>
              <Route path="/File" render={File}/>
              <Route render={Error}/>
            </Switch>
          </Router>
        </Provider>
      </div>
    );
  }
}

export default App;
