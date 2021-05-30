import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className="container-fluid bg-light border-bottom">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3">
                            <NavLink className="navbar-brand" to="/">Logo</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>

                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/home">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/service">Service</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/contact">Contact</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/Api">API</NavLink>
                                    </li>
                                    {/* <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/components/Tempapp">Weather</NavLink>
                                    </li> */}
                                    <li className="nav-item">
                                        <NavLink activeClassName="menu_active" className="nav-link" to="/components/Redux">Redux</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;