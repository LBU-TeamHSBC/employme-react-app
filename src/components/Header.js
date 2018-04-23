import React from 'react';
import { connect } from 'react-redux';

function _Header({ user }) {
  return (
    <header className="header">
      <div className="header-block header-block-collapse d-lg-none d-xl-none">
        <button className="collapse-btn" id="sidebar-collapse-btn">
          <i className="fa fa-bars"></i>
        </button>
      </div>
      <div className="header-block header-block-search">
        <form role="search">
          <div className="input-container">
            <i className="fa fa-search"></i>
            <input placeholder="Search" type="search" />
            <div className="underline"></div>
          </div>
        </form>
      </div>
      <div className="header-block header-block-nav">
        <ul className="nav-profile">
          {/* <li>
            <button
              onClick={console.log}
              className="btn btn-secondary btn-sm"> Sync </button>
          </li> */}
          <li className="notifications new">
            <a href="" data-toggle="dropdown" aria-expanded="false">
              <i className="fa fa-bell-o"></i>
              <sup>
                <span className="counter">{/* { notifications_count } */}</span>
              </sup>
            </a>
            <div className="dropdown-menu notifications-dropdown-menu" x-placement="bottom-start" style={{
              position: 'absolute',
              transform: 'translate3d(0px, 26px, 0px)',
              top: '0px',
              left: '0px',
              'willChange': 'transform'
            }}>
              <ul className="notifications-container">
                {/* {{#each notifications as |note|}} {{!-- TODO: NOTIFICATIONS --}} {{/each}} */}
              </ul>
              <footer>
                <ul>
                  <li>
                    <a href=""> View All </a>
                  </li>
                </ul>
              </footer>
            </div>
          </li>
          <li className="profile dropdown">
            <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="/#" role="button" aria-haspopup="true" aria-expanded="false">
              <div className="img" style={{
                backgroundImage: "url('https://avatars3.githubusercontent.com/u/3959008?v=3&amp;s=40')"}}>
              </div>
              <span className="name"> {user.username} </span>
            </a>
            <div className="dropdown-menu profile-dropdown-menu" aria-labelledby="dropdownMenu1">
              <a className="dropdown-item" href="/#">
                <i className="fa fa-user icon"></i> Profile </a>
              <a className="dropdown-item" href="/#">
                <i className="fa fa-bell icon"></i> Notifications </a>
              <a className="dropdown-item" href="/#">
                <i className="fa fa-gear icon"></i> Settings </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/">
                <i className="fa fa-power-off icon"></i> Logout </a>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
}

const mapStateToProps = ({ user }) => ({ user });

export const Header = connect(mapStateToProps)(_Header);