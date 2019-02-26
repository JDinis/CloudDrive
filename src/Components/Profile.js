import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import {login} from '../Actions/LoginActions';
import {Redirect,withRouter} from 'react-router-dom';
import './Styles/Login.css';
Window.$ = $;

class Profile extends Component {
	constructor(props){
		super(props);

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
		console.log(this.props.ErrorMsg);
		event.target.parentElement.style.display="none";
		document.getElementById("UserInput").value="";
		document.getElementById("PassInput").value="";
	};
	
render() {
		if(this.props.User.username!==undefined){
			return(
				<div>
					<p>{this.props.User.username}</p>
				</div>
			);
		}
	}
}

Profile.propTypes = {
	login: PropTypes.func.isRequired,
	User: PropTypes.object,
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	LoggedIn: state.Users.LoggedIn
})

export default withRouter(connect(mapStateToProps, {login})(Profile));