import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navStyle = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : "normal",
      // textDecoration: isActive ? "underline" : "none",
      borderBottom: isActive ? "3px solid #0d6efd" : "none",
    };
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <NavLink className="navbar-brand fw-bold" to="/">
            SKILL TEST
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <NavLink
                className="nav-link"
                style={navStyle}
                // aria-current="page"
                to="/"
                end
              >
                Home
              </NavLink>
              <NavLink className="nav-link" style={navStyle} to="/blog">
                Blog
              </NavLink>
              <NavLink className="nav-link" style={navStyle} to="/stats">
                Stats
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
