import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import axios from 'axios';
import NavBar from './NavBar';

Window.$ = $;

class UserPage extends Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		axios.get('/profile/', (res) => {
			if (res.data.user) {
				res.data.user.forEach(key => {
					React.createElement('p', `${key}: key`);
				})
			} else {
				window.location.assign('/logout');
			}
		},
			{}, (err) => {
				console.log('Error: ' + err);
			})
	}

	render() {
		return (
			<div style={{ flex: '1 1 auto', flexFlow: 'column' }} >
				k
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
})

export default withRouter(connect(mapStateToProps, null)(UserPage));