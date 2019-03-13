import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter, NavLink } from 'react-router-dom';
import './Styles/Login.css';
import axios from 'axios';
import { getUsers, deleteUser } from '../Actions/UserActions'
import { isLogged } from '../Actions/LoginActions'
import NavBar from './NavBar';

Window.$ = $;

class ListUsersPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getUsers();
		this.props.isLogged(this.props.User.username);
	}

	render() {
		var arr = [];
		if (this.props.LoggedIn) {
			return (
				<div style={{ flex: '1 1 auto', flexFlow: 'column', minHeight: "70vh", marginTop: "2vh" }}>
					<center>
						{
							this.props.getUsers()}
						{
							this.props.Users.forEach(User => {
								{
									React.createElement('div', { style: { borderRadius: "100%", border: "1px solid black", width: "15vh", height: "15vh", background: "url('" + User.profilePic + "')", backgroundSize: "cover", padding: "10px 20px 20px 20px" } },
										[React.createElement('br'), React.createElement('p', {}, 'Username: ' + User.username),
										React.createElement('p', {}, 'Email: ' + User.email),
										React.createElement('p', {}, 'First Name: ' + User.firstName),
										React.createElement('p', {}, 'Last Name: ' + User.lastName),
										React.createElement('p', {}, 'Is Admin: ' + User.admin),
										React.createElement('br'),
										React.createElement('br')])
								}
							})
						}
					</center>
				</div >
			)
		} else {
			return (
				<Redirect to="/login" />
			);
		}
	}
}

ListUsersPage.propTypes = {
	isLogged: PropTypes.func.isRequired,
	getUsers: PropTypes.func.isRequired,
	Users: PropTypes.array
}

const mapStateToProps = (state) => ({
	LoggedIn: state.Login.User,
	Users: state.Users.Users,
	Error: state.Users.Error
})
export default withRouter(connect(mapStateToProps, { getUsers, isLogged })(ListUsersPage));