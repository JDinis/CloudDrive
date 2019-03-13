import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import axios from 'axios';
import { getUser, editUser } from '../Actions/UserActions'
import { isLogged } from '../Actions/LoginActions'
import NavBar from './NavBar';

Window.$ = $;

class UserEditPage extends Component {
	constructor(props) {
		super(props);

		this.preventSubmit = this.preventSubmit.bind(this);
		this.saveUser = this.saveUser.bind(this);
	}

	preventSubmit(e) {
		if (e.stopPropagation) {
			e.stopPropagation();
		}

		if (e.preventDefault) {
			e.preventDefault();
		}
		return false;
	}

	saveUser(e) {
		var username = ($('#username').val() === "" || $('#username').val() === undefined || $('#username').val() === null ? null : $('#username').val());
		var email = ($('#email').val() === "" || $('#email').val() === undefined || $('#email').val() === null ? null : $('#email').val());
		var password = ($('#password').val() === "" || $('#password').val() === undefined || $('#password').val() === null ? null : $('#password').val());
		var firstName = ($('#firstName').val() === "" || $('#firstName').val() === undefined || $('#firstName').val() === null ? null : $('#firstName').val());
		var lastName = ($('#lastName').val() === "" || $('#lastName').val() === undefined || $('#lastName').val() === null ? null : $('#lastName').val());
		var profilePic = ($('#profilePic').val() === "" || $('#profilePic').val() === undefined || $('#profilePic').val() === null ? null : $('#profilePic').val());
		var admin = ($('#admin').val() === "" || $('#admin').val() === undefined || $('#admin').val() === null ? null : $('#admin').val());
		this.props.editUser(username, password, email, firstName, lastName, profilePic, admin, () => {
			this.props.getUser();
			this.props.history.push("/profile");
		});
	}

	componentWillMount() {
		this.props.getUser();
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn) {
			return (
				<div style={{ flex: '1 1 auto', flexFlow: 'column', minHeight: "70vh", marginTop: "2vh", alignSelf: "center" }}>
					<form target="self" onSubmit={this.preventSubmit}>
						<table>
							<tbody>
								<tr>
									<td>Username: </td>
									<td><input id="username" type="text" style={{ border: "1px black solid" }} /></td>
								</tr>
								<tr>
									<td>Email: </td>
									<td><input id="email" type="email" style={{ border: "1px black solid" }} /></td>
								</tr>
								<tr>
									<td>Password: </td>
									<td><input id="password" type="password" style={{ border: "1px black solid" }} /></td>
								</tr>
								<tr>
									<td>First Name: </td>
									<td><input type="text" id="firstName" style={{ border: "1px black solid" }} /></td>
								</tr>
								<tr>
									<td>Last Name: </td>
									<td><input type="text" id="lastName" style={{ border: "1px black solid" }} /></td>
								</tr>
								<tr>
									<td>Profile Picture Url: </td>
									<td><input type="text" id="profilePic" style={{ border: "1px black solid" }} /></td>
								</tr>
								{this.props.User.admin !== false && this.props.User.admin !== undefined ?
									<tr>
										<td>Is Admin: </td>
										<td><input type="checkbox" id="admin" value={true} /></td>
									</tr> : <tr><td></td></tr>}
							</tbody>
						</table>
						<button onClick={this.saveUser} className="btn btn-success">Save</button>
					</form>
				</div >
			)
		} else {
			return (
				<Redirect to="/login" />
			);
		}
	}
}

UserEditPage.propTypes = {
	isLogged: PropTypes.func.isRequired,
	getUser: PropTypes.func.isRequired,
	editUser: PropTypes.func.isRequired,
	User: PropTypes.object,
	Success: PropTypes.bool
}

const mapStateToProps = (state) => ({
	LoggedIn: state.Login.User,
	User: state.Users.User,
	Error: state.Users.Error,
	Success: state.Users.Success
})
export default withRouter(connect(mapStateToProps, { getUser, editUser, isLogged })(UserEditPage));