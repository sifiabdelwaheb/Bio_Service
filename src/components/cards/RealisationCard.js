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
import Slider from "./Slider";
import SendIcon from "@mui/icons-material/Send";
import { green, white } from "@mui/material/colors";

import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import RealisaionSlider from "./Realisation_Slider";
import {
  Row,
  Col,
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
const RealisationCard = (props) => (
  <div>
    <Row>
      <RealisaionSlider image={props.image} />
    </Row>
    <div className={Classes.realisation_component}>
      <Row>
        <div className={Classes.realisation_project_title}>{props.name}</div>
      </Row>
      <Row>
        <Col className={Classes.dialysis_machine_product_description}>
          {props.description}
        </Col>
      </Row>
      <Row style={{ padding: "5%" }}>
        <SendIcon
          sx={{ color: green[800], fontSize: 23 }}
          style={{ marginLeft: "5px" }}
        />{" "}
        <div className={Classes.realisation_view}>View project</div>
      </Row>
    </div>
  </div>
);
export default injectIntl(RealisationCard);
