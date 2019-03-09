import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';
import { withRouter } from 'react-router-dom';
import { ReactDOM } from 'react-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Logout from './Logout';

class NavBar extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let Element;
        if (this.props.User !== undefined && this.props.User !== null && this.props.User.username !== undefined) {
            this.Element = [React.createElement(NavLink, {
                to: "/Profile", className: 'btn btn-primary btn-block',
                style: { width: "100%" },
                title: 'Profile',
                key: "idElement1"
            }, "Profile"), React.createElement(NavLink, {
                to: "/Profile/Files", className: 'btn btn-primary btn-block',
                style: { width: "100%" },
                title: 'List Files',
                key: "idElement2"
            }, "List Files")];
        } else {
            this.Element = [React.createElement(NavLink, {
                to: "/Login", className: 'button btn btn-primary btn-block',
                style: { width: "100%" },
                title: 'Login',
                key: 'idElement4'
            }, React.createElement("i", {
                className: "fal fa-sign-in fa-fw fa-lg",
                key: 'idElement5'
            }))];
        }

        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" style={{ flex: 1, position: "relative" }} role="navigation">
                <div className="container" style={{ width: "100%" }}>
                    <Link to="/#Home" style={{ color: "white" }} className="navbar-brand">CloudDrive</Link>
                    <button className="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#exCollapsingNavbar">
                        &#9776;
                        </button>
                    <div className="collapse navbar-collapse" id="exCollapsingNavbar">
                        <ul className="nav navbar-nav">
                            <li className="nav-item"><Link to="/#Home" className="nav-link">Home</Link></li>
                            <li className="nav-item"><Link to="/Pricing" className="nav-link">Products</Link></li>
                            <li className="nav-item"><Link to="/AboutUs" className="nav-link">Company</Link></li>
                            <li className="nav-item"><Link to="/#ContactUs" className="nav-link">Support</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right flex-row justify-content-between ml-auto">
                        </ul>
                        <ul className="nav navbar-nav navbar-right flex-row justify-content-between ml-auto">
                            <button type="button" id="dropdownMenu1" data-toggle="dropdown" className="btn btn-primary" style={{ border: 0, borderRadius: "0px", backgroundColor: "transparent", outline: "none", outlineStyle: "none", boxShadow: "none", borderColor: "transparent" }} title="settings"><i className="fa fa-cog fa-fw fa-lg"></i> <span className="caret"></span></button>
                            <ul className="dropdown-menu dropdown-menu-right mt-2" style={{ backgroundColor: "transparent", border: 0 }}>
                                <li className="px-3 py-2">
                                    <form className="form">
                                        <div className="form-group">
                                            {this.Element}
                                        </div>
                                    </form>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

NavBar.propTypes = {
    User: PropTypes.object,
}

const mapStateToProps = (state) => ({
    User: state.Users.User,
    LoggedIn: state.Users.LoggedIn
})

export default withRouter(connect(mapStateToProps, null)(NavBar));