import React, { Component } from "react";
import { injectIntl } from "react-intl";
import {
  UncontrolledDropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu,
  Button,
  NavbarToggler,
  NavbarBrand,
  Container,
  Badge,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import { connect, useDispatch } from "react-redux";

import logoutAction from "../../redux/auth/authUserRedux";
import {
  setContainerClassnames,
  clickOnMobileMenu,
  changeLocale,
  changeSelectedMenuHasSubItems,
} from "../../redux/actions";
import allUsersActions from "../../redux/users/getAllUsersRedux";
import allLanguageActions from "../../redux/language/updateLanguageRedux";
import logo from "../../assets/svg/bioservice.svg";
import logo2 from "../../assets/images/avatr_logo.png";
import {
  menuHiddenBreakpoint,
  searchPath,
  localeOptions,
  isDarkSwitchActive,
} from "../../constants/defaultValues";

import { getDirection, setDirection } from "../../helpers/Utils";
import Classes from "./style.module.css";

import IntlMessages from "../../helpers/IntlMessages";
import Sidebar from "./Sidebar";
import { Nav, NavItem, Collapse } from "reactstrap";
import menuItems from "../../constants/menu";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import department from "../../data/department";

import Drawer from "./drawer";
class TopNav extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.onMouseEnter = this.onMouseEnter.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.onMouseOpen = this.onMouseOpen.bind(this);
    this.onMouseClose = this.onMouseClose.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      isInFullScreen: false,
      dropdownOpen: false,
      dropdownOpen1: false,
      show: false,
      top: false,
      left: false,
      bottom: false,
      right: false,

      searchKeyword: "",
      lang:
        (localStorage.getItem("currentLanguage") &&
          localStorage.getItem("currentLanguage").toUpperCase()) ||
        "EN",
    };
  }

  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  toggle() {
    this.setState((prevState) => ({
      dropdownOpen: !prevState.dropdownOpen,
    }));
  }

  onMouseEnter() {
    this.setState({ dropdownOpen: true });
  }

  onMouseLeave() {
    this.setState({ dropdownOpen: false });
  }

  toggle1() {
    this.setState((prevState1) => ({
      dropdownOpen1: !prevState1.dropdownOpen1,
    }));
  }

  onMouseOpen() {
    this.setState({ dropdownOpen1: true });
  }

  onMouseClose() {
    this.setState({ dropdownOpen1: false });
  }

  handleChangeLocale = (locale, direction) => {
    console.log("direction", direction);
    this.props.changeLocale(locale);
    this.props.updateLanguage(locale, this.props.id);
    this.setState({ lang: locale.toUpperCase() });

    setDirection(direction);
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  handleLogout = async () => {
    await window.location.reload();
    await this.props.logoutHandler();
    await localStorage.removeItem("persist:root");
    await localStorage.removeItem("__theme_color");
  };

  menuButtonClick = (e, menuClickCount, containerClassnames) => {
    e.preventDefault();

    setTimeout(() => {
      var event = document.createEvent("HTMLEvents");
      event.initEvent("resize", false, false);
      window.dispatchEvent(event);
    }, 350);
    this.props.setContainerClassnames(
      ++menuClickCount,
      containerClassnames,
      this.props.selectedMenuHasSubItems
    );
  };
  mobileMenuButtonClick = (e, containerClassnames) => {
    e.preventDefault();
    this.props.clickOnMobileMenu(containerClassnames);
  };

  render() {
    console.log("lang", this.state.lang);
    const { containerClassnames, menuClickCount, locale } = this.props;
    const { messages } = this.props.intl;
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
        <nav
          className="  d-flex fixed  align-items-center"
          style={{ backgroundColor: "red" }}
        >
          <div className={Classes.nav_header_component}>
            <div>
              <div className={Classes.Image_Container}>
                <img
                  style={{
                    maxWidth: "130px",
                    minWidth: "130px",
                    maxHeight: "auto",
                    width: "100%",
                  }}
                  src={logo}
                  alt="logo"
                />
              </div>
            </div>
            <div className={Classes.responsive_header_menu}>
              <div className="d-flex align-items">
                <div className={Classes.Item_component}>
                  <Nav horizontal className="justify-content-left">
                    {menuItems().map((item) => {
                      return (
                        <NavItem key={item.id} style={{ minWidth: "110px" }}>
                          <NavLink
                            to={item.to}
                            data-flag={item.id}
                            className={Classes.Linktitle}
                            activeStyle={{
                              color: "#FFF",
                              fontWeight: "bold",
                              position: "relative",
                              textUnderlineOffset: "10px",
                              textDecoration: " underline #fff 5px",
                              backgroundColor: "#344B8A",
                              opacity: "1",
                              backgroundColor: "red",
                            }}
                          >
                            <div className={Classes.menu_item_title}>
                              <IntlMessages id={item.label} />
                            </div>
                          </NavLink>
                        </NavItem>
                      );
                    })}
                  </Nav>

                  <UncontrolledDropdown
                    onMouseOver={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    isOpen={this.state.dropdownOpen}
                    toggle={this.toggle}
                  >
                    <DropdownToggle
                      className={Classes.Dropdown_title}
                      caret
                      color="light"
                      size="sm"
                      style={{
                        backgroundColor: "#28537f",
                        borderColor: "#28537f",
                        color: "#fff",
                        fontSize: "18px",

                        color: "#1a2733",

                        textUnderlineOffset: "10px",
                        fontSize: "18px",
                      }}
                    >
                      <IntlMessages id="dashboards.department" />
                    </DropdownToggle>

                    <DropdownMenu
                      className="mt-0"
                      right
                      style={{ width: "250px", top: "-54px" }}
                    >
                      {department.map((item) => (
                        <div key={item.id}>
                          <DropdownItem
                            href={item.link}
                            className={Classes.department_linktitle}
                          >
                            {item.name}
                          </DropdownItem>
                        </div>
                      ))}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown
                    onMouseOver={this.onMouseOpen}
                    onMouseLeave={this.onMouseClose}
                    isOpen={this.state.dropdownOpen1}
                    toggle={this.toggle1}
                  >
                    <DropdownToggle
                      className={Classes.Dropdown_title}
                      caret
                      color="light"
                      size="sm"
                      style={{
                        backgroundColor: "#28537f",
                        borderColor: "#28537f",

                        fontSize: "18px",

                        color: "#1a2733",

                        textUnderlineOffset: "10px",
                        fontSize: "18px",
                      }}
                    >
                      <IntlMessages id="dashboards.about" />
                    </DropdownToggle>
                    <DropdownMenu className="mt-0" left>
                      <DropdownItem
                        className={Classes.department_linktitle}
                        tag={Link}
                        to="/app/dashboards/about/company"
                      >
                        Our Company
                      </DropdownItem>
                      <DropdownItem
                        className={Classes.department_linktitle}
                        tag={Link}
                        to="/app/dashboards/about/news"
                      >
                        News
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                  <UncontrolledDropdown className="mr-2">
                    <DropdownToggle
                      caret
                      color="light"
                      size="sm"
                      className={Classes.Dropdown_title}
                      style={{
                        backgroundColor: "#28537f",
                        borderColor: "#28537f",
                        color: "#1a2733",
                        fontSize: "18px",
                      }}
                    >
                      <span className="name">{this.state.lang}</span>
                    </DropdownToggle>
                    <DropdownMenu className="mt-3" right>
                      {localeOptions.map((l) => {
                        return (
                          <DropdownItem
                            className={Classes.Linktitle}
                            onClick={() =>
                              this.handleChangeLocale(l.id, l.direction)
                            }
                            key={l.id}
                          >
                            {l.name}
                          </DropdownItem>
                        );
                      })}
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </div>
              </div>
              <div></div>
            </div>
            <div className={Classes.responsive_button}>
              <Drawer />
            </div>
          </div>
        </nav>
      </div>
    );
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
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    setContainerClassnames: (parm1, param2, param3) =>
      dispatch(setContainerClassnames(parm1, param2, param3)),
    clickOnMobileMenu: (parm1) => dispatch(clickOnMobileMenu(parm1)),
    changeLocale: (parm1) => dispatch(changeLocale(parm1)),
    logoutHandler: () => dispatch(logoutAction.logout()),
    updateLanguage: (data, id) =>
      dispatch(allLanguageActions.updateLanguageRequest(data, id)),
  };
};
export default injectIntl(connect(mapStateToProps, mapDispatchToProps)(TopNav));
