import React, { Component } from 'react'
import classNames from 'classnames/bind';
export class Footer extends Component {
  render() {
    return (
      <footer className={
        classNames({'footer-sidebar-hidden': !this.props.showMenu})
      }>
        <div className="footer-content">
          <p>© 2019. Cloudmanageportal Co., Ltd. All Rights Reserved</p>
        </div>
      </footer>
    )
  }
}

export default Footer
