import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter, NavLink } from 'react-router-dom';
import './Styles/Login.css';
import { isLogged } from '../Actions/LoginActions'
import { getUser } from '../Actions/UserActions'
import Footer from './Footer';
import NavBar from './NavBar';

Window.$ = $;

class BackOffice extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.getUser();
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn) {
			return (
				<div className="MainPage">
					<NavBar />
					<div style={{ flex: '1 1 auto', flexFlow: 'column', minHeight: "70vh", marginTop: "2vh", alignSelf: "center", display: "flex" }}>
						<table>
							<tbody>
								<tr>
									<td><NavLink to="/AddUsers">Create User Profile</NavLink></td>
									<td></td>
									<td><NavLink to="/ViewProfile">View User Profile</NavLink></td>
								</tr>
								<tr>
									<td><NavLink to="/ListUsers">List Users</NavLink></td>
									<td></td>
									<td><NavLink to="/ListUserFiles">List User's Files</NavLink></td>
									<td></td>
									<td><NavLink to="/DownloadUsersFiles">Download User's Files</NavLink></td>
								</tr>
							</tbody>
						</table>
					</div>
					<Footer />
				</div>
			)
		} else {
			return (
				<Redirect to="/login" />
			);
		}
	}
}

BackOffice.propTypes = {
	isLogged: PropTypes.func.isRequired,
	getUser: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	LoggedIn: state.Login.User,
	User: state.Users.User,
	Error: state.Users.Error
})
export default withRouter(connect(mapStateToProps, { isLogged, getUser })(BackOffice));