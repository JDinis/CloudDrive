import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import axios from 'axios';
import { getUser } from '../Actions/LoginActions'
import NavBar from './NavBar';

Window.$ = $;

class UserPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getUser();
	}

	render() {
		return (
			<div style={{ flex: '1 1 auto', flexFlow: 'column', marginTop: "2vh" }}>
				<center>
					<p>Username: {this.props.User.username}</p>
					<p>Password: {this.props.User.password}</p>
					<p>Email: {this.props.User.email}</p>
					<p>First Name:{this.props.User.firstName}</p>
					<p>Last Name:{this.props.User.lastName}</p>
					<p>Profile Picture Url: {this.props.User.profilePic}</p>
					<p>Is Admin: {this.props.User.admin}</p>
					<button onClick={this.deleteUser} ></button>
				</center>
			</div>
		)
	}
}

UserPage.propTypes = {
	getUser: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	Error: state.Users.Error
})
export default withRouter(connect(mapStateToProps, { getUser })(UserPage));