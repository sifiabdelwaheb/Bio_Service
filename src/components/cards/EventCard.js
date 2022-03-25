import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { injectIntl } from "react-intl";
import { Card, CardBody, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";

import { Button } from "@material-ui/core";
import Classes from "./style.module.css";
import { green, grey } from "@mui/material/colors";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
import { Row, Col } from "reactstrap";
const EventCard = (props) => (
  <div style={{ marginTop: "4%" }}>
    <div className={Classes.department_dialysis_product_title}>
      {props.title}
    </div>
    <hr style={{ minHeight: "2px" }} />
    <Row>
      <Col>
        <img
          src={props.image}
          alt="iconplus"
          className={Classes.dialysis_machine_images_hidden}
        />
      </Col>

      <Col style={{minWidth:'350px'}}>
        <Row>
          <div className={Classes.event_title}>{props.title}</div>
        </Row>
        <Row className={Classes.event_date}>
          <EventIcon sx={{ color: grey[500] }} />
          {props.date}
        </Row>
        <Row>
          <Col className={Classes.event_card_description}>
            {props.description}
          </Col>
        </Row>
        <hr style={{ minHeight: "2px", marginTop: "5%" }} />
        <Row className={Classes.event_card_location}>
          <Col>
            <LocationOnIcon sx={{ color: grey[1000] }} /> {props.location}
          </Col>
          <Col>
            <Button
              variant="contained"
              onClick={() => {}}
              style={{
                backgroundColor: "#fff",
                borderColor: "#fff",
                fontWeight: "bold",
                height: "45px",
                color: "#0033a0",
                borderRadius: "30px",
                width: "170px",
                fontSize: "14px",
                fontFamily: "Montserrat-Bold,sans-serif",
              }}
            >
              Event Details
            </Button>
          </Col>
        </Row>
        <hr style={{ minHeight: "2px" }} />
      </Col>
    </Row>
  </div>
);
export default injectIntl(EventCard);
