import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default class Footer extends Component {

    render() {
        return (
            <footer>
                <section id="Footer" style={{ flex: '1 1 0' }}>
                    <div style={{ display: "flex", flex: "0 0 auto", backgroundColor: "rgba(0, 0, 0,1)", paddingTop: "4%" }}>
                        <div style={{ display: "flex", flexFlow: "collumn wrap", height: "auto", marginLeft: "30%", marginTop: "-2%", paddingBottom: "2%", marginRight: "auto", alignItems: "center", flexWrap: "nowrap" }}>
                            <div style={{ flex: "0 0 auto", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(255,255,255,1)" }}>
                                <h5>CloudDrive</h5>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to="/#Home" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Home</Link></li>
                                    <li className="nav-item"><Link to="/#Features" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Features</Link></li>
                                    <li className="nav-item"><Link to="/#ContactUs" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Contact Us</Link></li>
                                </ul>
                            </div>
                            <div style={{ flex: "0 0 auto", marginLeft: "5%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(255,255,255,1)" }}>
                                <h5>Products</h5>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Basic</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Professional</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Enterprise</Link></li>
                                </ul>
                            </div>
                            <div style={{ flex: "0 0 auto", marginLeft: "5%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(255,255,255,1)" }}>
                                <h5>Company</h5>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to="/AboutUs" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">About Us</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Press</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Blog</Link></li>
                                </ul>
                            </div>
                            <div style={{ flex: "0 0 auto", marginLeft: "5%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(255,255,255,1)" }}>
                                <h5>Support</h5>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Help Center</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Cookies</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Privacy & terms</Link></li>
                                </ul>
                            </div>
                            <div style={{ flex: "0 0 auto", marginLeft: "5%", alignItems: "center", alignSelf: "center", justifyContent: "space-evenly", color: "rgba(255,255,255,1)" }}>
                                <h5>Community</h5>
                                <ul className="nav navbar-nav">
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Developers</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Referrals</Link></li>
                                    <li className="nav-item"><Link to="/#" style={{ color: "rgba(255,255,255,0.5)" }} className="nav-link">Forum</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            </footer>
        );
    }
}