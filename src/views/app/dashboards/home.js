import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";

import Classes from "./style.module.css";
import IntlMessages from "../../../helpers/IntlMessages";

import { injectIntl } from "react-intl";
//import registerUserAction from '../../../redux/package/RegisterUserRedux';
import InputPattern from "../../../common/inputPattern";
import Hoc from "../../../hoc/wrapperInputs";
import video from "../../../assets/video/file.mp4";
import { Row, Col } from "reactstrap";
import VideoPlayer from "react-background-video-player";
import { Button } from "@material-ui/core";
import Slider from "../../../components/cards/Slider";

const Wrapper = Hoc(InputPattern);
function Plants(props) {
  const dispatch = useDispatch();
  const [isValid, setValidation] = useState(false);

  const redux = useSelector((state) => state);
  //const [selectedId, setSelectedId] = useState()
  const [activeIdx, setActiveIdx] = React.useState(-1);

  return (
    <div>
      <div className={Classes.Container_Recherche}>
        <div>
          <VideoPlayer
            className={Classes.about_video_component}
            src={video}
            autoPlay={true}
            muted={true}
            style={{ maxHeight: "600px" }}
          />
        </div>
        <div className={Classes.Hiden_image}>
          <div>
            <Row>
              <Col className={Classes.home_image_title}>
                International Bio Service
              </Col>
            </Row>

            <Row>
              <div className={Classes.hr}></div>
            </Row>
            <Row>
              <Col>
                <div className={Classes.home_image_title1}>
                  At the service of health
                </div>
              </Col>
            </Row>
            <Row>
              <Col>
                <div className={Classes.home_image_title1}>
                  for more than 30 years{" "}
                </div>
              </Col>
            </Row>
            <Row style={{ width: "60%", marginTop: "12%" }}>
              <Col>
                {" "}
                <Button
                  variant="contained"
                  onClick={() => {}}
                  style={{
                    backgroundColor: "#1f3b64",
                    fontWeight: "bold",
                    height: "60px",
                    color: "white",
                    borderRadius: "30px",
                    width: "148px",
                    fontSize: "16px",
                    fontFamily: "Montserrat-Bold,sans-serif",
                  }}
                >
                  EXPLORE
                </Button>
              </Col>
              <Col>
                <Button
                  variant="contained"
                  onClick={() => {}}
                  className={Classes.home_button_title1}
                  style={{
                    backgroundColor: "#3e884f",
                    fontWeight: "bold",
                    height: "60px",
                    color: "white",
                    borderRadius: "30px",
                    width: "168px",
                    fontSize: "16px",
                    fontFamily: "Montserrat-Bold,sans-serif",
                  }}
                >
                  OUR CATALOG
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <Row
        style={{
          padding: "4%",
          backgroundColor: "#FFF",
          width: "98%",
          marginLeft: "1%",
          marginTop: "4%",
          borderRadius: "1%",
        }}
      >
        <div className={Classes.about_vision_title}>
          Quand le monde des fournitures médicales évolue de plus en plus
          rapidement, International Bio Service continue à travailler avec
          diligence pour garantir à ses clients des partenaires fiables et
          efficaces sur lesquels ils peuvent compter pour les approvisionner
          avec des produits de qualité supérieure en utilisant une technologie
          de pointe en provenance de Japon, l’Europe et les états
        </div>
      </Row>
      <Row
        style={{
          padding: "4%",
          backgroundColor: "#FFF",
          width: "98%",
          marginLeft: "1%",
          marginTop: "4%",
          borderRadius: "1%",
        }}
      >
        <Col className={Classes.about_vision_title} md={2}>
          Partners
        </Col>

        <Col>
          <Slider />
        </Col>
      </Row>
    </div>
  );
}

export default injectIntl(Plants);
