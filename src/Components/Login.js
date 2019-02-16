import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import {login} from '../Actions/LoginActions'
import {BrowserRouter,Redirect,withRouter} from 'react-router-dom';
import $ from 'jquery';
import './Styles/Login.css';

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			loggedIn:{
				success: false, 
				error:null
			},
			Class:'modal w3-animate-opacity'
		};
		
		const ErrorMsg=null;
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSignUp = this.handleSignUp.bind(this);
		this.handleLogin = this.handleLogin.bind(this);
		this.clickEvt = this.clickEvt.bind(this);
	}
	
	componentDidMount() {
		$("#Login").modal({
			closable:false
		}).modal("show");
	}
	
	componentWillUnmount() {
		$('#Login').modal({
			closable:true
		}).modal('toggle');
	}
	
	handleChange(event){
		const value = event.target.value;
		const name = event.target.name;
		this.setState({
			[name]: value
		});
	}
	
	handleLogin(event){
		event.preventDefault();
		this.props.login(this.state.username,this.state.password);
	}	
	
	handleSignUp(event){
		event.preventDefault();
		axios.post('/signup', {
			username: this.state.username,
			password: this.state.password,
		}).then((res)=>this.props.handleSignUp(res.data));
	}
	
	clickEvt(event){
		event.preventDefault();
		console.log(this.props.ErrorMsg);
		event.target.parentElement.style.display="none";
		document.getElementById("UserInput").value="";
		document.getElementById("PassInput").value="";
	};
	
render() {
	var errorNotSet = false;
	if(this.props.User!==undefined){
		errorNotSet=this.props.User.loggedIn!==undefined && this.props.User.loggedIn.error!==undefined ? true : false;
	}
	
	var success =  errorNotSet ? {success: this.props.User.loggedIn}:false;
	var disp= (!success) && this.props.User.loggedIn!==undefined ? 'initial' : 'none';
		if(!success){
			return (
				<div className="LoginForm">
					<div className={this.state.Class} data-backdrop="static" data-keyboard="false" id="Login" tabIndex="-1" role="dialog"> 
						<div className="modal-dialog" role="document">
							<div className="modal-content" id="LoginDiv">
								<div className="modal-body">
									<div className="Row">
										<b>Username:</b>&nbsp;&nbsp;
										<input className="TextInput" id="UserInput" type="text" name="username" onChange={this.handleChange} placeholder="Insert Username" />
									</div>
									<br/>
									<div className="Row">
											<b>Password:&nbsp;&nbsp;</b>
											<input className="TextInput" id="PassInput" type="password" name="password" onChange={this.handleChange} placeholder="Insert Password"></input>							
									</div>
									<br/>
									<div className="RowInput">
										<form action="Login" method="post" target="_self">
											<span className="SubmitInputSpan">
												<button onClick={this.handleLogin} id="LoginButton" className="SubmitInput" type="submit">Login</button>
												<button onClick={this.handleSignUp} id="SignupButton" className="SubmitInput" type="submit">Sign Up</button>
											</span>
										</form>
									</div>
									<div className="RowError">
										<span id="Error" style={{display:disp}}>{this.ErrorMsg=(!success && this.props.User.loggedIn!=undefined) ? this.props.User.loggedIn.error:""}&nbsp;&nbsp;&nbsp;<i className="fas fa-times-circle" onClick={this.clickEvt}></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}else{
			return (<Redirect to="/"/>);
		}		
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	User: PropTypes.object,
}

const mapStateToProps = (state) => ({
	User: state.Users.User
})

export default withRouter(connect(mapStateToProps, {login})(Login));