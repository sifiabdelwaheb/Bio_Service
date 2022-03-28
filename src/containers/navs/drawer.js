import * as React from "react";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";

import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import { Nav, NavItem } from "reactstrap";
import menuItems from "../../constants/menu";
import { NavLink } from "react-router-dom";
import { injectIntl } from "react-intl";
import IntlMessages from "../../helpers/IntlMessages";

import Classes from "./style.module.css";

import Accordions from "./accordion";

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
    root: {
     
    },
  });
function SwipeableTemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
  });
  const [expanded, setExpanded] = React.useState(false);
  const classes = useStyles();

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div className={classes.root}>
      <div
        style={{
          
          backgroundColor: "#28537f",
          paddingLeft: "5px",
          paddingTop: "100px"
        }}
      >
        <div vertical>
          {menuItems().map((item) => {
            return (
              <NavItem
                key={item.id}
                style={{
                  minHeight: "40px",
                  display: "flex",
                  alignItems: "left",
                  justifyContent: "left",
                  minWidth: "200px",
                  marginLeft:"20px",
                  backgroundColor:'#28537f'
                }}
              >
                <NavLink
                  to={item.to}
                  data-flag={item.id}
                  className={Classes.Linktitle}
                  style={{ marginTop: "5px" }}
                >
                  <div className={Classes.menu_item_title}>
                    <IntlMessages id={item.label} />
                  </div>
                </NavLink>
              </NavItem>
            );
          })}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <div key={anchor}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 4 }}
            onClick={toggleDrawer(anchor, true)}
            style={{ borderColor: "white" }}
          >
            <MenuIcon style={{ fontSize: "2.5rem", color: "white" }} />
          </IconButton>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
            transitionDuration={400}
            
          >
            <div>{list(anchor)}</div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "left",
                backgroundColor: "#28537f",
              }}
            >
              <Accordions />
            </div>
          </SwipeableDrawer>
        </div>
      ))}
    </div>
  );
}

export default injectIntl(SwipeableTemporaryDrawer);
