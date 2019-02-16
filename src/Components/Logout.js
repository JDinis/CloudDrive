import React, { Component } from 'react';
import axios from 'axios';
//import './Styles/Logout.css';

class Logout extends Component {
	constructor(props){
		super(props);
		this.state = {
			username:'',
			password:'',
			loggedIn:{
				success: false, 
				error:null
			}
		};
		
		this.handleLogout = this.handleLogout.bind(this);
	}
	

	handleLogout(event){
		event.preventDefault();
		axios.post('/logout', {
			username: this.state.username,
			password: this.state.password,
		},{
			port:3001
		}).then((res)=>this.props.handleLogout(res.data));
	}
	
	render() {
		return (
			<form action="logout" method="post" target="_self">
				<button onClick={this.handleLogout} className="Logout" type="submit"><i className="fal fa-power-off"></i></button>
			</form>
		);
	}
}

export default Logout;
