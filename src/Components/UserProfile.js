import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter, NavLink } from 'react-router-dom';
import './Styles/Login.css';
import axios from 'axios';
import { getUserByName, deleteUserByName } from '../Actions/UserActions'
import { isLogged } from '../Actions/LoginActions'
import NavBar from './NavBar';

Window.$ = $;

class UserProfile extends Component {
	constructor(props) {
		super(props);

		const username = "";

		this.deleteThisUser = this.deleteThisUser.bind(this);
	}

	deleteThisUser() {
		this.props.deleteUserByName(this.props.username);
	}

	componentWillMount() {
		this.props.getUserByName(this.props.username);
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn) {
			return (
				<div style={{ flex: '1 1 auto', flexFlow: 'column', minHeight: "70vh", marginTop: "2vh" }}>
					<center>
						{this.props.User.profilePic !== undefined ? <div style={{ borderRadius: "100%", border: "1px solid black", width: "15vh", height: "15vh", background: "url('" + this.props.User.profilePic + "')", backgroundSize: "cover", padding: "10px 20px 20px 20px" }}></div> : <div style={{ borderRadius: "100%", border: "1px solid black", width: "15vh", height: "15vh", padding: "9px 14px 20px 14px" }}><i className="fas fa-user-secret fa-6x"></i></div>}
						<br />
						<p>Username: {this.props.User.username}</p>
						{this.props.User.email !== undefined ? <p>Email: {this.props.User.email}</p> : ""}
						{this.props.User.firstName !== undefined ? <p>First Name: {this.props.User.firstName}</p> : ""}
						{this.props.User.lastName !== undefined ? <p>Last Name: {this.props.User.lastName}</p> : ""}
						{this.props.User.admin !== false && this.props.User.admin !== undefined ? <p>Is Admin: True</p> : ""}
						<NavLink exact to={"/profile/edit/" + this.props.username} className="btn btn-success">Edit</NavLink>
						<button onClick={this.deleteThisUser} className="btn btn-danger">Delete</button>
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

UserProfile.propTypes = {
	isLogged: PropTypes.func.isRequired,
	getUserByName: PropTypes.func.isRequired,
	deleteUserByName: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	LoggedIn: state.Login.User,
	User: state.Users.User,
	Error: state.Users.Error
})
export default withRouter(connect(mapStateToProps, { getUserByName, deleteUserByName, isLogged })(UserProfile));