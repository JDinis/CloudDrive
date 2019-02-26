import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import {store} from './store'
import {persistor} from './store'
import Home from './Routes/Home';
import File from './Routes/File';
import Login from './Routes/Login';
import {UserProfile} from './Routes/UserProfile';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Error from './Routes/Error';
import 'bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <PersistGate loading={<div>Loading...</div>} persistor={persistor}>
            <Router>
              <Switch>
                <Route path="/" exact render={Home}/>
                <Route path="/Login" render={Login}/>
                <Route path="/File" render={File}/>
                <Route path="/Profile" render={UserProfile}/>
                <Route render={Error}/>
              </Switch>
            </Router>
          </PersistGate>
        </Provider>
      </div>
    );
  }
}

export default App;
