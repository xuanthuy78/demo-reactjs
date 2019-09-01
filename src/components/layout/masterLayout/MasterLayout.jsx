import React, { Component } from 'react';
import './MasterLayout.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import HomePage from '../homePage/HomePage';
import Footer from '../footer/Footer';
export class MasterLayout extends Component {
  render() {
    return (
      <div className="page-container">
        <Header></Header>
        <Sidebar></Sidebar>
        <HomePage></HomePage>
        <Footer></Footer>
      </div>
    )
  }
}

export default MasterLayout
