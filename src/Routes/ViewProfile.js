import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import { getUser, getUserByName } from '../Actions/UserActions'
import { isLogged } from '../Actions/LoginActions'
import NavBarBackOffice from '../Components/NavBarBackOffice';
import UserProfile from '../Components/UserProfile';
import Footer from '../Components/Footer';
Window.$ = $;

class ViewProfile extends Component {
  componentWillMount = () => {
    this.props.isLogged(this.props.User.username);
    this.props.getUserByName(this.username);
  }

  render() {
    var username = "";
    if (this.props.LoggedIn) {
      if (this.props.User.admin) {
        return (
          <div className="MainPage">
            <NavBarBackOffice />
            <div style={{ flex: '1 1 auto', flexFlow: 'column', minHeight: "70vh", marginTop: "2vh", alignSelf: "center" }}>
              <p>Username: <input id="usertext" type="text" name="username" />
                <button onClick={() => {
                  username = $("#usertext").val();
                  this.props.getUserByName(username); this.forceUpdate();
                }} >Search User</button></p>
              <UserProfile username={this.username === "" ? this.User.username : $("#usertext").val()} />
            </div>
            <Footer />
          </div>
        );
      }
    } else {
      return (<Redirect to="/Login" />);
    }
  }
}

ViewProfile.propTypes = {
  isLogged: PropTypes.func.isRequired,
  getUserByName: PropTypes.func.isRequired,
  User: PropTypes.object
}

const mapStateToProps = (state) => ({
  LoggedIn: state.Login.User,
  User: state.Users.User,
  Users: state.Users.Users,
  Error: state.Users.Error
})

export default withRouter(connect(mapStateToProps, { getUser, getUserByName, isLogged })(ViewProfile));