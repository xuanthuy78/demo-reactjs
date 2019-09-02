import React, { Component } from 'react';
import './MasterLayout.css';
import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import HomePage from '../homePage/HomePage';
import Footer from '../footer/Footer';
export class MasterLayout extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: true
    }
  }

  handleOnSidebar = () => {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  render() {
    console.log(this.state.showMenu)
    return (
      <div className="page-container">
        <Header handleOnSidebar={this.handleOnSidebar}></Header>
        {
          this.state.showMenu &&
          <Sidebar></Sidebar>
        }

        <HomePage showMenu={this.state.showMenu}></HomePage>
        <Footer showMenu={this.state.showMenu}></Footer>
      </div>
    )
  }
}

export default MasterLayout
