import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./sidebar.css";
const Sidebar = () => {
  return (
    <>
      <input type="checkbox" id="sidebar-toggle" />
      <div className="sidebar">
        <div className="sidebar-header">
          <h3 className="brand">
            <span>
              <Link className="sidebar-a" to="/">
                SMART CHAIR
              </Link>
            </span>
          </h3>
          <label for="sidebar-toggle" className="ti-menu-alt"></label>
        </div>

        <div className="sidebar-menu">
          <ul>
            <li>
              <span className="ti-home"></span>
              <span>
                <NavLink
                  activeClassName="active"
                  className="sidebar-a nav-link-span"
                  exact
                  to="/"
                >
                  Dashboard
                </NavLink>
              </span>
            </li>
            <li>
              <span className="ti-settings"></span>
              <span>
                <NavLink
                  activeClassName="active"
                  className="sidebar-a nav-link-span"
                  exact
                  to="/configure"
                >
                  Settings
                </NavLink>
              </span>
            </li>
            <li>
              <span className="ti-check-box"></span>
              <span>
                <NavLink
                  activeClassName="active"
                  className="sidebar-a nav-link-span"
                  exact
                  to="/control"
                >
                  Control
                </NavLink>
              </span>
            </li>
            <li>
              <span className="ti-write"></span>
              <span>
                <NavLink
                  activeClassName="active"
                  className="sidebar-a nav-link-span"
                  exact
                  to="/report"
                >
                  Report
                </NavLink>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
