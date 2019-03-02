import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import UserPage from './UserPage';

Window.$ = $;

class Profile extends Component {
	render() {
		if (this.props.User !== undefined && this.props.User !== null && this.props.User.username !== undefined) {
			return (
				<div className="MainPage">
					<NavBar />
					<UserPage />
					<Footer />
				</div>
			);
		} else {
			return (<Redirect to="/" />);
		}
	}
}

Profile.propTypes = {
	User: PropTypes.object,
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	LoggedIn: state.Users.LoggedIn
})

export default withRouter(connect(mapStateToProps, null)(Profile));