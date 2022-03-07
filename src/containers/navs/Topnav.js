import React, { Component } from 'react'
import { injectIntl } from 'react-intl'
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,


  NavbarToggler,
  NavbarBrand,



  Container,
  Badge
} from 'reactstrap'
import { NavLink } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'

import logoutAction from '../../redux/auth/authUserRedux'
import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
  changeSelectedMenuHasSubItems,
} from '../../redux/actions'
import allUsersActions from '../../redux/users/getAllUsersRedux'
import allLanguageActions from '../../redux/language/updateLanguageRedux'
import logo from '../../assets/svg/bioservice.svg'
import logo2 from '../../assets/images/avatr_logo.png'
import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
} from '../../constants/defaultValues'

import { MobileMenuIcon, MenuIcon } from '../../components/svg'

import { getDirection, setDirection } from '../../helpers/Utils'
import Classes from './style.module.css'

import IntlMessages from '../../helpers/IntlMessages'
import Sidebar from './Sidebar'
import { Nav, NavItem, Collapse } from 'reactstrap'
import menuItems from '../../constants/menu'
import { Row, Col, Input } from 'reactstrap'
//LocationOnIcon from 'icons-material/LocationOn';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import CallIcon from '@mui/icons-material/Call';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { green } from '@mui/material/colors';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

class TopNav extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isInFullScreen: false,
      searchKeyword: '',
      lang:
        (localStorage.getItem('currentLanguage') &&
          localStorage.getItem('currentLanguage').toUpperCase()) ||
        'EN',
    }
  }

  handleChangeLocale = (locale, direction) => {
    console.log('direction', direction)
    this.props.changeLocale(locale)
    this.props.updateLanguage(locale, this.props.id)
    this.setState({ lang: locale.toUpperCase() })

    setDirection(direction)
    setTimeout(() => {
      window.location.reload()
    }, 500)
  }
  isInFullScreen = () => {
    return (
      (document.fullscreenElement && document.fullscreenElement !== null) ||
      (document.webkitFullscreenElement &&
        document.webkitFullscreenElement !== null) ||
      (document.mozFullScreenElement &&
        document.mozFullScreenElement !== null) ||
      (document.msFullscreenElement && document.msFullscreenElement !== null)
    )
  }
  handleSearchIconClick = (e) => {
    if (window.innerWidth < menuHiddenBreakpoint) {
      let elem = e.target
      if (!e.target.classList.contains('search')) {
        if (e.target.parentElement.classList.contains('search')) {
          elem = e.target.parentElement
        } else if (
          e.target.parentElement.parentElement.classList.contains('search')
        ) {
          elem = e.target.parentElement.parentElement
        }
      }

      if (elem.classList.contains('mobile-view')) {
        this.search()
        elem.classList.remove('mobile-view')
        this.removeEventsSearch()
      } else {
        elem.classList.add('mobile-view')
        this.addEventsSearch()
      }
    } else {
      this.search()
    }
  }
  addEventsSearch = () => {
    document.addEventListener('click', this.handleDocumentClickSearch, true)
  }
  removeEventsSearch = () => {
    document.removeEventListener('click', this.handleDocumentClickSearch, true)
  }

  handleDocumentClickSearch = (e) => {
    let isSearchClick = false
    if (
      e.target &&
      e.target.classList &&
      (e.target.classList.contains('navbar') ||
        e.target.classList.contains('simple-icon-magnifier'))
    ) {
      isSearchClick = true
      if (e.target.classList.contains('simple-icon-magnifier')) {
        this.search()
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.classList &&
      e.target.parentElement.classList.contains('search')
    ) {
      isSearchClick = true
    }

    if (!isSearchClick) {
      const input = document.querySelector('.mobile-view')
      if (input && input.classList) input.classList.remove('mobile-view')
      this.removeEventsSearch()
      this.setState({
        searchKeyword: '',
      })
    }
  }
  handleSearchInputChange = (e) => {
    this.setState({
      searchKeyword: e.target.value,
    })
  }
  handleSearchInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.search()
    }
  }

  search = () => {
    this.props.history.push(searchPath + '/' + this.state.searchKeyword)
    this.setState({
      searchKeyword: '',
    })
  }

  toggleFullScreen = () => {
    const isInFullScreen = this.isInFullScreen()

    var docElm = document.documentElement
    if (!isInFullScreen) {
      if (docElm.requestFullscreen) {
        docElm.requestFullscreen()
      } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen()
      } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen()
      } else if (docElm.msRequestFullscreen) {
        docElm.msRequestFullscreen()
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen()
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen()
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen()
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen()
      }
    }
    this.setState({
      isInFullScreen: !isInFullScreen,
    })
  }

  render() {
    console.log('lang', this.state.lang)
    const { containerClassnames, menuClickCount, locale } = this.props
    const { messages } = this.props.intl
    return (
      <div >
        {/*
        <Nav horizontal className="justify-content-center" style={{ height: '45px', backgroundColor: '#1f3b64', width: '100%', paddingLeft: '5%', paddingRight: '8%' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginRight: '5%' }}>
            <AddLocationIcon sx={{ color: green[400] }} />
            <div style={{ color: 'white' }}>
              Visit Us:3 Avenue du Roi Abedlaziz Al Saoud
              2092 El Manar 2</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '5%' }}>
            <CallIcon sx={{ color: green[400] }} />
            <div style={{ color: 'white' }}>
              Call Us:+216 71889729, 70860282, 71872271</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: '12px' }}>
            <ArrowUpwardIcon sx={{ color: green[400] }} />
            <div style={{ color: 'white' }}>
              Follow Us:</div>
            <FacebookIcon sx={{ color: green[400], fontSize: 20 }} />
            <LinkedInIcon sx={{ color: green[400], fontSize: 20 }} />
            <TwitterIcon sx={{ color: green[400], fontSize: 20 }} />
            <InstagramIcon sx={{ color: green[400], fontSize: 20 }} />
          </div>

        </Nav>
        <div style={{ height: '1px' }} />
        */}
        <nav className="  d-flex fixed  align-items" style={{ backgroundColor: 'red' }} >
          <div
            className="d-flex align-items"

            style={{ height: '100%', width: '100%', backgroundColor: '#1f3b64', width: '100%', justifyContent: 'space-between', paddingLeft: '5%', paddingRight: '2%', display: 'flex', flexWrap: 'wrap' }}
          >

            <div>
              <div
                className={Classes.Image_Container}
              >
                <img
                  style={{
                    maxWidth: '120px', minWidth: '100px', maxHeight: 'auto', width: '100%',
                  }}
                  src={logo}
                  alt="logo"
                />
              </div>

            </div>
            <div className="d-flex align-items" >
              <div
                className={Classes.Item_component}
              >
                <Nav horizontal className="justify-content-left">
                  {menuItems().map((item) => {
                    return (
                      <NavItem key={item.id} style={{ minWidth: '100px', }}>
                        <NavLink
                          to={item.to}
                          data-flag={item.id}
                          className={Classes.Linktitle}
                          activeStyle={{
                            color: '#FFF',
                            fontWeight: 'bold',
                            position: 'relative',
                            textUnderlineOffset: '10px',
                            textDecoration: ' underline #fff 5px',
                            backgroundColor: '#344B8A',
                            opacity: '1',
                            backgroundColor: 'red'

                          }}
                        >

                          <div
                            className={Classes.menu_item_title}
                          >
                            <IntlMessages id={item.label} />
                          </div>
                        </NavLink>
                      </NavItem>
                    )
                  })}

                </Nav>

                <UncontrolledDropdown>
                  <DropdownToggle
                    style={{ backgroundColor: '#1f3b64', border: '0px', width: '100%' }}

                  >
                    <div className={Classes.Dropdown_title} style={{

                      fontWeight: 'bold',

                      textUnderlineOffset: '10px',
                      //textDecoration: ' underline #fff 5px',
                      backgroundColor: '#1f3b64',
                      opacity: '1',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'center',


                      fontSize: '18px',

                    }}>Departement <ArrowDropDownIcon sx={{ color: green[50], fontSize: 26 }} /></div>

                  </DropdownToggle>
                  <DropdownMenu className="mt-3" right style={{ width: '500px' }}>
                    <DropdownItem>
                      Dailyse
                    </DropdownItem>
                    <DropdownItem>
                      Consomable
                    </DropdownItem>
                    <DropdownItem>
                      Cardiologie
                    </DropdownItem>
                    <DropdownItem href='https://www.agbl.net/'>
                      AGBl
                    </DropdownItem>

                  </DropdownMenu>
                </UncontrolledDropdown>
                <UncontrolledDropdown>
                  <DropdownToggle
                    style={{ backgroundColor: '#1f3b64', border: '0px' }}

                  >
                    <div className={Classes.Dropdown_title} style={{

                      fontWeight: 'bold',

                      textUnderlineOffset: '10px',
                      //textDecoration: ' underline #fff 5px',
                      backgroundColor: '#1f3b64',
                      opacity: '1',
                      display: 'flex',
                      alignContent: 'center',
                      justifyContent: 'center',


                      fontSize: '18px',

                    }}>About<ArrowDropDownIcon sx={{ color: green[50], fontSize: 20 }} /></div>

                  </DropdownToggle>
                  <DropdownMenu className="mt-3" right>
                    <DropdownItem tag={Link} to='/app/dashboards/about'>
                      Our Company
                    </DropdownItem>
                    <DropdownItem>
                      News
                    </DropdownItem>


                  </DropdownMenu>
                </UncontrolledDropdown>


              </div>
            </div>
          </div>




        </nav >

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    containerClassnames: state.menu.containerClassnames,
    menuClickCount: state.menu.menuClickCount,
    selectedMenuHasSubItems: state.menu.selectedMenuHasSubItems,
    locale: state.settings.locale,
    auth: state.auth,
    id: state.auth.response.id,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setContainerClassnames: (parm1, param2, param3) =>
      dispatch(setContainerClassnames(parm1, param2, param3)),
    clickOnMobileMenu: (parm1) => dispatch(clickOnMobileMenu(parm1)),
    changeLocale: (parm1) => dispatch(changeLocale(parm1)),
    logoutHandler: () => dispatch(logoutAction.logout()),
    updateLanguage: (data, id) =>
      dispatch(allLanguageActions.updateLanguageRequest(data, id)),
  }
}
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(TopNav))
