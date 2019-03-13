import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import UserPage from './UserPage';
import { isLogged } from '../Actions/LoginActions';

Window.$ = $;

class Profile extends Component {

	componentWillMount() {
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn) {
			return (
				<div className="MainPage">
					<NavBar />
					<UserPage />
					<Footer />
				</div>
			);
		} else {
			return (<Redirect to="/Login" />);
		}
	}
}

Profile.propTypes = {
	isLogged: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Login.User,
	LoggedIn: state.Login.LoggedIn
})

export default withRouter(connect(mapStateToProps, { isLogged })(Profile));