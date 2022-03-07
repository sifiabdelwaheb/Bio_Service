import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import TopNav from '../containers/navs/Topnav'
import TopNabHome from '../containers/navs/TopnavHome'
import Sidebar from '../containers/navs/Sidebar'
import Footer  from '../components/Footer/Footer'
//import Testnav from '../containers/navs/TestNav'
import { Navbar, Modal, ModalHeader, ModalBody, Button } from 'reactstrap'
import Classes from './style.module.css'
import img from '../assets/images/big_data_analytics.jpg'
import Header from '../containers/navs/Header'
class AppLayout extends Component {
  render() {
    const { containerClassnames } = this.props
    return (
      <div id="app-container">
        <TopNav
          history={this.props.history}
          style={{
            opacity: '1',
          }}
        />

        <div>
          <div style={{ width: '100%' }}>{this.props.children}</div>
        </div>
        <Footer/>

      </div>
    )
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu
  return { containerClassnames }
}
const mapActionToProps = {}

export default withRouter(connect(mapStateToProps, mapActionToProps)(AppLayout))
