import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import { isLogged } from '../Actions/LoginActions';
import ListUsersPage from './ListUsersPage';

Window.$ = $;

class ListProfiles extends Component {

	componentWillMount() {
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn && this.props.User.admin) {
			return (
				<div className="MainPage">
					<NavBar />
					<ListUsersPage />
					<Footer />
				</div>
			);
		} else {
			return (<Redirect to="/Login" />);
		}
	}
}

ListProfiles.propTypes = {
	isLogged: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Login.User,
	LoggedIn: state.Login.LoggedIn
})

export default withRouter(connect(mapStateToProps, { isLogged })(ListProfiles));