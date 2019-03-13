import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import $ from 'jquery';
import { Redirect, withRouter } from 'react-router-dom';
import './Styles/Login.css';
import Footer from './Footer';
import NavBar from './NavBar';
import FileList from './FileList';
import { isLogged } from '../Actions/LoginActions'

Window.$ = $;

class Files extends Component {
	constructor(props) {
		super(props);
		this.forceRerender = this.forceRerender.bind(this);
	}

	forceRerender() {
		this.forceUpdate();
	}

	componentWillMount() {
		this.props.isLogged(this.props.User.username);
	}

	render() {
		if (this.props.LoggedIn) {
			return (
				<div className="MainPage">
					<NavBar />
					<FileList id="FileList" forceRerender={this.forceRerender} />
					<Footer />
				</div>
			);
		} else {
			return (<Redirect to="/Login" />);
		}
	}
}

Files.propTypes = {
	isLogged: PropTypes.func.isRequired,
	User: PropTypes.object,
}

const mapStateToProps = (state) => ({
	User: state.Login.User,
	LoggedIn: state.Login.LoggedIn
})

export default withRouter(connect(mapStateToProps, { isLogged })(Files));