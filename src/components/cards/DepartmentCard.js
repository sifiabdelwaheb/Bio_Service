import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { injectIntl } from "react-intl";
import { Card, CardBody, CardTitle } from "reactstrap";
import IntlMessages from "../../helpers/IntlMessages";
import plantimg from "../../assets/images/medium.jpeg";
import species from "../../data/species";
import itemData from "../../data/images";
import { Button } from "@material-ui/core";
import Classes from "./style.module.css";

import {
    Row,
    Col,
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption,
  } from "reactstrap";
const DepartmentCard = (props) => (
  <div>
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

      <Col>
        <Row>
          <div className={Classes.dialysis_machine_product_title}>
            Products{" "}
          </div>
        </Row>
        <Row>
          <Col className={Classes.dialysis_machine_product_description}>
            {props.description}
          </Col>
        </Row>
        <Row style={{ padding: "5%" }}>
          <Button
            variant="contained"
            onClick={() => {}}
            style={{
              backgroundColor: "#1f3b64",
              fontWeight: "bold",
              height: "45px",
              color: "white",
              borderRadius: "30px",
              width: "170px",
              fontSize: "14px",
              fontFamily: "Montserrat-Bold,sans-serif",
            }}
          >
            View products
          </Button>
        </Row>
      </Col>
    </Row>
  </div>
);
export default injectIntl(DepartmentCard);
