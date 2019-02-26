import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {login} from '../Actions/LoginActions';
import {Redirect,withRouter} from 'react-router-dom';
import './Styles/Login.css';
Window.$ = $;

class Login extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			Class:'modal w3-animate-opacity'
		};
		
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
		},{
			port:3001
		}).then((res)=>this.props.handleSignUp(res.data));
	}
	
	clickEvt(event){
		event.preventDefault();
		if(this.props.Error!==null)
			console.log(this.props.Error.msg);
		event.target.parentElement.style.display="none";
		document.getElementById("UserInput").value="";
		document.getElementById("PassInput").value="";
	};
	
render() {
	var disp= this.props.Error!==null && !this.props.LoggedIn? 'initial' : 'none';
		if(!this.props.LoggedIn){
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
										<span id="Error" style={{display:disp}}>{this.ErrorMsg=(!this.props.LoggedIn && this.props.Error!==null) ? this.props.Error.err:""}&nbsp;&nbsp;&nbsp;<i className="fas fa-times-circle" onClick={this.clickEvt}></i></span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			);
		}else{
			$('#Login').modal().toggle();
			return (<Redirect to="/Profile"/>);
		}		
	}
}

Login.propTypes = {
	login: PropTypes.func.isRequired,
	User: PropTypes.object,
	LoggedIn: PropTypes.bool,
	Error: PropTypes.object
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	LoggedIn: state.Users.LoggedIn,
	Error: state.Users.Error
})

export default withRouter(connect(mapStateToProps, {login})(Login));