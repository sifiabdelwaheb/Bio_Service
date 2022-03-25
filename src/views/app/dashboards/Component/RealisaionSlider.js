import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "../style.module.css";
import IntlMessages from "../../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";
//import registerUserAction from '../../../redux/package/RegisterUserRedux';
import InputPattern from "../../../../common/inputPattern";
import Hoc from "../../../../hoc/wrapperInputs";
import { Button } from "@material-ui/core";
import IdentifyForms from "../../../../common/Client";
import Slider from "react-slick";
import data from "../../../../data/realisation";
import images from "./images";
import {
  Row,
  Col,
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { green, white } from "@mui/material/colors";
import ReactMap from "../../../../components/cards/React_maps";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SendIcon from "@mui/icons-material/Send";
import Mission from "../../../../assets/images/mission1.png";
import vision from "../../../../assets/images/vision1.png";
import nipro from "../../../../assets/images/nipro.png";
import OurOffice from "../../../../assets/images/maps.drawio (3).png";
import { Class } from "@material-ui/icons";
import { UncontrolledCarousel } from "reactstrap";

const Wrapper = Hoc(InputPattern);

function RealisaionSlider(props) {
  const dispatch = useDispatch();

  return (
    <div>
      <Row>
        <Col className={Classes.about_vision_title} md={2}>
          Partners
        </Col>

        <Col>
          <Slider
            dots={false}
            slidesToShow={2}
            slidesToScroll={1}
            autoplay={true}
            autoplaySpeed={3000}
            pauseOnHover={true}
          >
            {props.image.map((item) => (
              <a key={item.id} href={item.link}>
                {" "}
                <img
                  src={item.img}
                  style={{ height: "100px", backgroundColor: "red" }}
                />
              </a>
            ))}
          </Slider>
        </Col>
      </Row>
    </div>
  );
}

export default injectIntl(RealisaionSlider);
