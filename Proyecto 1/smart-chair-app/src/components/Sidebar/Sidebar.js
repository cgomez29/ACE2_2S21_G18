import React from 'react'
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <>
            <input type="checkbox" id="sidebar-toggle" />
            <div className="sidebar">
                <div className="sidebar-header">
                    <h3 className="brand">
                        <span>
                            <Link className="navbar-brand" to="/">SMART CHAIR</Link>
                        </span>
                    </h3>
                    <label for="sidebar-toggle" className="ti-menu-alt"></label>
                </div>

                <div className="sidebar-menu">
                    <ul>
                        <li>
                            <a href="">
                                <span className="ti-home"></span>
                                <span>                      
                                    <Link className="nav-link" to="/">Dashboard</Link>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="ti-settings"></span>
                                <span>
                                    <Link className="nav-link" to="/configure">Settings</Link>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="ti-check-box"></span>
                                <span>
                                    <Link className="nav-link" to="/control">Control</Link>
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <span className="ti-write"></span>
                                <span>
                                    <Link className="nav-link" to="/report">Report</Link>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Sidebar
