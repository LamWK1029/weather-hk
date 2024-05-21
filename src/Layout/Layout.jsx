// src/layout/Layout.js
import React from "react";
import { NavLink } from "react-router-dom";
import "./Layout.css";
import HomeIcon from "@mui/icons-material/Home";
import ListIcon from "@mui/icons-material/List";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <div className="pageContent">{children}</div>

      <nav>
        <ul>
          <li>
            <NavLink to="/">
              <HomeIcon />
            </NavLink>
          </li>
          <li>
            <NavLink to="/areas">
              <ListIcon />
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
