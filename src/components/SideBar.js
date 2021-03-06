import React from 'react';
import { Link } from 'react-router-dom'

import { BrandLogo } from './BrandLogo';

export const SideBar = (props) => (
  <aside className="sidebar">
    <div className="sidebar-container">
      <div className="sidebar-header">
        <BrandLogo />
      </div>
      <nav className="menu">
        <ul className="sidebar-menu metismenu" id="sidebar-menu">
          <li>
            <Link to="/"><i className="fa fa-home"></i>Home</Link>
          </li>
          <li className="active">
            <Link to="/dashboard"><i className="fa fa-id-card"></i>Dashboard</Link>
          </li>
        </ul>
      </nav>
    </div>
    <footer className="sidebar-footer">
      <ul className="sidebar-menu metismenu" id="customize-menu">
        <li className="">
          <Link to="/logout"><i className="fa fa-sign-out"></i>Logout</Link>
        </li>
      </ul>
    </footer>
  </aside>
);