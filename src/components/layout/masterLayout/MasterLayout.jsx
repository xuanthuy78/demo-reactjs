import React, { Component } from 'react';
import './MasterLayout.css';
import Header from '../header/Header';

export class MasterLayout extends Component {
  render() {
    return (
      <div className="page-container">
        <Header></Header>
      </div>
    )
  }
}

export default MasterLayout
