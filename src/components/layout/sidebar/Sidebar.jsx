import React, { Component } from 'react';
import './Sidebar.css';
import { Link } from "react-router-dom";

export class Sidebar extends Component {
  render() {
    return (
      <section className="sidebar-menu">
        <ul className="nav flex-column">
          <li className="items">
            <i className="item icon fab fa-microsoft fa-lg" />
            <Link className="item title" to="/">Dashboard</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon far fa-heart fa-lg" />
            <Link className="item title" to="/">Blue Print</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon fas fa-cog fa-lg" />
            <Link className="item title" to="/">Property</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items master">
            <i className="item icon fas fa-crown fa-lg" />
            <Link className="item title" to="/">Master</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon far fa-calendar fa-lg" />
            <Link className="item title" to="/">Tenants</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon fas fa-globe fa-lg" />
            <Link className="item title" to="/">Sites</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon fas fa-check fa-lg" />
            <Link className="item title" to="/">Parts</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon fas fa-book-open fa-lg" />
            <Link className="item title" to="/">Catalog</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
          <li className="items">
            <i className="item icon fas fa-user fa-lg" />
            <Link className="item title" to="/">User</Link>
            <i className="item next fas fa-chevron-right" />
          </li>
        </ul>
      </section>
    )
  }
}

export default Sidebar
