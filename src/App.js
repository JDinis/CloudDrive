import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './store'
import { persistor } from './store'
import Home from './Routes/Home';
import { File } from './Routes/File';
import { UploadRoute } from './Routes/UploadRoute';
import Login from './Routes/Login';
import { UserProfile } from './Routes/UserProfile';
import { EditProfile } from './Routes/EditProfile';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Error from './Routes/Error';
import { logout } from './Actions/LoginActions';
import { Redirect } from 'react-router-dom'
import { LOGOUT, SIGNUP } from './Actions/Types'
import 'bootstrap';
import 'filepond/dist/filepond.min.css';
import Pricing from './Routes/Pricing';
import AboutUs from './Routes/AboutUs';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          {/*</Provider>PersistGate loading={<div>Loading...</div>} persistor={persistor}>*/}
          <Router>
            <Switch>
              <Route path="/" exact render={Home} />
              <Route path="/Login" render={Login} />
              <Route path="/Pricing" render={Pricing} />
              <Route path="/AboutUs" render={AboutUs} />
              <Route path="/Signup" render={() => {
                store.dispatch({
                  type: SIGNUP
                }); return (<Redirect to="/" />);
              }} />
              <Route path="/Logout" render={() => {
                store.dispatch({
                  type: LOGOUT
                }); return (<Redirect to="/" />);
              }} />
              <Route path="/File" render={File} />
              <Route path="/Profile" exact render={UserProfile} />
              <Route path="/Profile/Edit" exact render={EditProfile} />
              <Route path="/Profile/Files" exact render={File} />
              <Route path="/Profile/Upload" exact render={UploadRoute} />
              <Route render={Error} />
            </Switch>
          </Router>
          {/*</PersistGate>*/}
        </Provider>
      </div>
    );
  }
}

export default App;
