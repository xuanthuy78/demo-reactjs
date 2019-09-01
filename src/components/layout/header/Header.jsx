import React, { Component } from 'react';
import logo from '../../../logo.png';
import './Header.css';
import { Link } from "react-router-dom";

export class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="navbar navbar-expand navbar-light fixed-top">
          <div className="border-logo">
            <Link className="navbar-brand" to="/">
              <img className="images-logo" src={logo} alt="Logo" />
            </Link>
          </div>
          <div className="btn-toggler ml-5">
            <i className="fas fa-bars" />
          </div>
          <form className="form-inline ml-5">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <div className="input-group-append">
                <span className="input-group-text"> <i className="fas fa-search" /></span>
              </div>
            </div>
          </form>
          <div className="information collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link" to="#">
                  <span className="badge badge-danger">22</span>
                  <i className="far fa-bell fa-lg" />
                </Link>
              </li>
              <li className="nav-item active">
                <Link className="nav-link" to="#">
                  <span className="badge badge-danger">8</span>
                  <i className="far fa-comment-alt fa-lg" />
                </Link>
              </li>
              <li className="nav-item clock">
                <Link className="nav-link name" to="#"> <span className="fullname">Valerie Luna</span><i className="fas circle-user fa-user-circle fa-lg" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    )
  }
}

export default Header
