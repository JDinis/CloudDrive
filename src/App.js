import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './Styles/App.css';
import store from './store'
import Home from './Routes/Home';
import File from './Routes/File';
import Chat from './Routes/Chat';
import Error from './Routes/Error';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <Switch>
              <Route path="/" exact render={Home}/>
              <Route path="/Chat" render={Chat}/>
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
