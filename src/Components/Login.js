import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { login, signup } from '../Actions/LoginActions';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
const loginBackground = require('./Styles/CloudDriveLogin.webp');
Window.$ = $;

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			displayError: this.props.Error !== null ? 'initial' : 'none',
			Class: 'modal w3-animate-opacity'
		};

		this.handleEnter = this.handleEnter.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.clickEvt = this.clickEvt.bind(this);
	}

	handleEnter(e) {
		if (e.keyCode === 13) {
			// Cancel the default action, if needed
			e.preventDefault();
			// Trigger the button element with a click
			document.getElementById("LoginButton").click();
		}
	}

	componentDidMount() {
		$("#Login").modal({
			closable: false
		}).modal("show");
		$('body').removeClass('modal-open');
		$('body').css({
			'background-image': 'url(' + loginBackground + ')',
			'background-size': 'cover',
			'background-repeat': 'no-repeat'
		});
	}
	componentWillUnmount() {
		$('.modal-backdrop').remove();
		$('body').css({
			'background-image': '',
			'background-size': '',
			'background-repeat': ''
		});
		this.handleChange = null;
		this.handleSignUp = null;
		this.handleLogin = null;
		this.clickEvt = null;
	}

	handleChange(event) {
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	}

	handleLogin(event) {
		event.preventDefault();
		this.props.login(this.state.username, this.state.password, (obj = this) => {
			if (obj.props.User !== undefined && (obj.props.Error === undefined || (obj.props.Error !== null && JSON.parse(obj.props.Error).err === null))) {
				obj.setState({ username: obj.state.username, password: obj.state.password, displayError: 'none', Class: obj.state.Class });
			} else {
				obj.setState({ username: obj.state.username, password: obj.state.password, displayError: 'initial', Class: obj.state.Class });
			}
		});
	}

	handleSignUp(event) {
		event.preventDefault();
		this.props.signup(this.state.username, this.state.password, (obj = this) => {
			if (obj.props.User !== undefined && (obj.props.Error === undefined || (obj.props.Error !== null && JSON.parse(obj.props.Error).err === null))) {
				obj.setState({ username: obj.state.username, password: obj.state.password, displayError: 'none', Class: obj.state.Class });
			} else {
				obj.setState({ username: obj.state.username, password: obj.state.password, displayError: 'initial', Class: obj.state.Class });
			}
		});
	}

	clickEvt(event) {
		event.preventDefault();
		if (this.props.Error !== null && event.target.parentElement.style.display === 'initial') {
			console.log(this.props.Error.msg);
			event.target.parentElement.style.display = "none";
			this.setState({ username: this.state.username, password: this.state.password, displayError: 'none', Class: this.state.Class });
			document.getElementById("UserInput").value = "";
			document.getElementById("PassInput").value = "";
		} else if (this.props.Error !== null && event.target.parentElement.style.display === 'none') {
			this.setState({ username: this.state.username, password: this.state.password, displayError: 'initial', Class: this.state.Class });
			event.target.parentElement.style.display = "initial";
		}
	};

	render() {
		var disp = this.state.displayError;
		if (!this.props.LoggedIn) {
			return (
				<div className="modal-open">
					<div className="LoginForm">
						<div className={this.state.Class} data-backdrop="static" data-keyboard="false" id="Login" tabIndex="-1" role="dialog">
							<div className="modal-dialog" role="document">
								<div className="modal-content" id="LoginDiv">
									<div className="modal-body">
										<div className="Row">
											<b>Username:</b>&nbsp;&nbsp;
										<input className="TextInput" id="UserInput" type="text" name="username" onChange={this.handleChange} placeholder="Insert Username" />
										</div>
										<br />
										<div className="Row">
											<b>Password:&nbsp;&nbsp;</b>
											<input className="TextInput" id="PassInput" type="password" name="password" onChange={this.handleChange} placeholder="Insert Password"></input>
										</div>
										<br />
										<div className="RowInput">
											<form action="Login" method="post" target="_self">
												<span className="SubmitInputSpan">
													<button autoFocus onKeyDown={this.handleEnter} onClick={this.handleLogin} id="LoginButton" className="SubmitInput" type="button">Login</button>
													<button onClick={this.handleSignUp} id="SignupButton" className="SubmitInput" type="button">Sign Up</button>
												</span>
											</form>
										</div>
										<div className="RowError">
											<span id="Error" style={{ display: disp }}>{this.ErrorMsg = (!this.props.LoggedIn && this.props.Error !== null && JSON.parse(this.props.Error).err !== null) ? JSON.parse(this.props.Error).err : ""}&nbsp;&nbsp;&nbsp;<i className="fas fa-times-circle" onClick={this.clickEvt}></i></span>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		} else {
			$('#Login').modal().toggle();
			return (<Redirect to="/Profile" />);
		}
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	signup: PropTypes.func.isRequired,
	User: PropTypes.object,
	LoggedIn: PropTypes.bool,
	Error: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	LoggedIn: state.Users.LoggedIn,
	Error: state.Users.Error
})

export default withRouter(connect(mapStateToProps, { login, signup })(Login));