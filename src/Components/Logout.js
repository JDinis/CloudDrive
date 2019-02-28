import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../Actions/LoginActions';
import { withRouter } from 'react-router-dom';

class Logout extends Component {
	constructor(props) {
		super(props);
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout(event) {
		event.preventDefault();
		this.props.logout(this.props.User.username, this.props.User.password);
	}
	render(handleLogout) { return <button onClick={this.handleLogout} className="btn btn-primary btn-block" type="button"><i className="fal fa-power-off"></i></button> }
}

Logout.propTypes = {
	logout: PropTypes.func.isRequired,
	User: PropTypes.object,
}

const mapStateToProps = (state) => ({
	User: state.Users.User,
	LoggedIn: state.Users.LoggedIn
})

export default withRouter(connect(mapStateToProps, { logout })(Logout));