import React from 'react';
import { BrandLogo } from './BrandLogo';

export function SideBar(props) {
  return (
    <aside className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-header">
          <BrandLogo />
        </div>
        <nav className="menu">
          <ul className="sidebar-menu metismenu" id="sidebar-menu">
            <li className="active">
              <a href="/">
                <i className="fa fa-home"></i> Dashboard </a>
            </li>
          </ul>
        </nav>
      </div>
      <footer className="sidebar-footer">
        <ul className="sidebar-menu metismenu" id="customize-menu">
        </ul>
      </footer>
    </aside>
  );
}