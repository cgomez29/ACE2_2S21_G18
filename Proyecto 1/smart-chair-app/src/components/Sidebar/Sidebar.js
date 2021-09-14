import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './sidebar.css';
const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span>
                            <Link className="navbar-brand" to="/">
                                SMART CHAIR
                            </Link>
                        </span>
                    </h3>
                    <label for="sidebar-toggle" className="ti-menu-alt"></label>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a>
                                <span className="ti-home"></span>
                                <span>
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-link"
                                        exact
                                        to="/"
                                    >
                                        Dashboard
                                    </NavLink>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="ti-settings"></span>
                                <span>
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-link"
                                        exact
                                        to="/configure"
                                    >
                                        Settings
                                    </NavLink>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="ti-check-box"></span>
                                <span>
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-link"
                                        exact
                                        to="/control"
                                    >
                                        Control
                                    </NavLink>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a>
                                <span className="ti-write"></span>
                                <span>
                                    <NavLink
                                        activeClassName="active"
                                        className="nav-link"
                                        exact
                                        to="/report"
                                    >
                                        Report
                                    </NavLink>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
