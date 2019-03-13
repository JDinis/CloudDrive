import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import { isLogged } from '../Actions/LoginActions';
import ListUsersFiles from './ListUsersPage';
import Axios from 'axios';

Window.$ = $;

class DownloadUsersFiles extends Component {
	constructor(props) {
		super(props);

		this.download = this.download.bind(this);
	}

	download(e) {
		if (e.event !== undefined) {
			if (e.event.preventDefault)
				e.event.preventDefault();
			if (e.event.stopPropagation)
				e.event.stopPropagation();
		}

		Axios.get('/files/' + $("#usertext").val());
	}

	componentWillMount() {
		this.props.isLogged(this.props.User.username);
	}

	render() {
		var username = "";
		if (this.props.LoggedIn && this.props.User.admin) {
			return (
				<div className="MainPage">
					<NavBar />
					<p><input id="usertext" type="text" name="username" />
						<button onClick={() => { username = $("#usertext").val(); this.forceUpdate(); }} /></p>

					<Footer />
				</div>
			);
		} else {
			return (<Redirect to="/Login" />);
		}
	}
}

DownloadUsersFiles.propTypes = {
	isLogged: PropTypes.func.isRequired,
	User: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Login.User,
	LoggedIn: state.Login.LoggedIn
})

export default withRouter(connect(mapStateToProps, { isLogged })(DownloadUsersFiles));