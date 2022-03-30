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
import Slider from "../../../../components/cards/Slider";
import {
  Row,
  Col,
  CarouselControl,
  Carousel,
  CarouselItem,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import Breadcrumb from "../../../../containers/navs/Breadcrumb";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { green, white } from "@mui/material/colors";
import ReactMap from "../../../../components/cards/React_maps";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SendIcon from "@mui/icons-material/Send";
import Mission from "../../../../assets/images/mission1.png";
import vision from "../../../../assets/images/vision1.png";
import OurOffice from "../../../../assets/images/maps.drawio (2).png";
import { Class } from "@material-ui/icons";
import { UncontrolledCarousel } from "reactstrap";
import ScrollAnimation from "react-animate-on-scroll";
import { Navbar, Nav, Container } from "react-bootstrap";
import Content from "./ReadMore";
import description from "./about_data";
import About_Description from "./About_description";
import Company_list from "../../../../data/Company_list";
const Wrapper = Hoc(InputPattern);

function Our_Company(props) {
  const dispatch = useDispatch();
  const [isValid, setValidation] = useState(false);
  const [clicked, setClick] = useState(false);
  const [identifyForm, setidentifyForm] = useState(IdentifyForms());

  const [detail, setdetail] = useState([]);
  const [SpeciesDetail, setSpeciesDetail] = useState([]);
  const [selectedId, setSelectedId] = useState();
  const [deleteVerif, setdeleteVerif] = useState(false);
  const redux = useSelector((state) => state);
  //const [selectedId, setSelectedId] = useState()
  const [activeIdx, setActiveIdx] = React.useState(-1);

  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className={Classes.Container_Contact}>
      <div className={Classes.about_hidden_image}>
        <div>
          <Row>
            <Col>
              <Breadcrumb
                match={props.match}
                style={{ backgroundColor: "red" }}
              />{" "}
            </Col>{" "}
          </Row>
          <Row>
            <Col className={Classes.About_title}>About Us</Col>{" "}
          </Row>{" "}
        </div>
      </div>

      <div
        className={Classes.about_description_component}
        style={{ backgroundColor: "#fff" }}
      >
        <div className={Classes.about_description_title}>
          {" "}
          QUI SOMMES-NOUS ?
        </div>
        <div className={Classes.about_description}>
          <Content
            text=" Créé en 1990, INTERNATIONAL BIO SERVICE est un négociant et
            distributeur de tout type de matériel médico-chirurgical et jetable
            notamment les fournitures d’hémodialyse, les instruments chirurgicaux,
            le matériel de radiologie (solution générale) et de laboratoire, les
            dispositifs de cardiologie, les grand et les petits équipements ainsi
            que l’informatique médicale et les solutions de télémédecine."
            value={300}
          />
        </div>

        <div className={Classes.about_description_title}>
          {" "}
          À PROPOS DE BIO-GROUP ?
        </div>
        <div className={Classes.about_description}>
          Notre société est une filiale de BIO GROUP qui regroupe désormais 12
          sociétés : <br />
          <br />
          {Company_list.map((list) => (
            <div key={list.id}>
              <ul className={Classes.company_list_title}>
                <li >{list.text}</li>
              </ul>
            </div>
          ))}
          Notre distribution couvrent les hôpitaux publics et les cliniques
          privées en Tunisie et dans plus que 13 pays africains (Cote d’Ivoire,
          Libye, Djibouti, Niger, Sénégal, Gabon…)
        </div>
        <div className={Classes.about_description}>
          <Content
            text="BIO GROUP et ses filiales proposent à leurs clients, autorités de santé, hôpitaux, cliniques, réseaux de soins, laboratoires pharmaceutiques, une gamme complète de services et d'équipements pour les aider à définir leur stratégie et mettre en œuvre leurs projets. Grâce au savoir-faire du Groupe, il est en mesure d'accompagner les différents professionnels de santé à toutes les étapes de la définition et de la mise en œuvre de la politique de santé."
            value={150}
          />
        </div>

        <div className={Classes.about_description_title}>
          NOUS SOMMES DIFFÉRENTS DES AUTRES ?
        </div>

        <div className={Classes.about_description}>
          <div>
            <About_Description />
          </div>
        </div>
      </div>

      <Row style={{ marginLeft: "1%", width: "98%" }}>
        <Col
          className={Classes.about_component_vision}
          style={{ backgroundColor: "#fff" }}
        >
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row className={Classes.about_description_title}>
              <img
                style={{
                  maxWidth: "100px",
                  minWidth: "100px",
                  maxHeight: "auto",
                  width: "100%",
                }}
                src={vision}
                alt="logo"
              />
            </Row>
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row className={Classes.about_description_title}>Vision</Row>
          </Row>

          <Row className={Classes.about_description}>
            The group BIO GROUP and its subsidiaries offer their customers-
            health authorities, hospitals, clinics, treatment
            networks,pharmaceutical laboratories, a comprehensive range of
            services and equipments to help them determine their strategy and
            implement their projects. Thanks to the Group's know-how, it can
            provide services to the different health professionals at all stages
            of health policy determination and implementation .
          </Row>
        </Col>
        <Col
          className={Classes.about_component_vision}
          style={{ backgroundColor: "#fff" }}
        >
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row className={Classes.about_description_title}>
              <img
                style={{
                  maxWidth: "100px",
                  minWidth: "100px",
                  maxHeight: "auto",
                  width: "100%",
                }}
                src={Mission}
                alt="logo"
              />
            </Row>
          </Row>
          <Row
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Row className={Classes.about_description_title}>Mission</Row>
          </Row>

          <Row className={Classes.about_description}>
            Répondre aux besoins actuels et futurs en toute sorte de fournitures
            médicales est notre mission en devenant un acteur clé pour aider la
            Tunisie mais aussi le continent Africain à s&#39;adapter à la
            nouvelle normalité.
          </Row>
        </Col>
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

      <Row
        className={Classes.about_vision_title}
        style={{
          padding: "5%",
          backgroundColor: "#FFF",
          width: "100%",
          marginTop: "4%",
          borderRadius: "2%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Row>Our Offices</Row>
      </Row>
      <Row
        className={Classes.about_our_vision}
        style={{
          padding: "5%",
          backgroundColor: "#FFF",
          width: "100%",
          borderRadius: "2%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        We have six offices across the world, spanning Europe, Africa and the
        Middle East.
      </Row>

      <Row
        style={{
          backgroundColor: "#fff",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          style={{
            maxHeight: "auto",
            width: "70%",
            height: "100%",
            marginRight: "5%",
            zoom: "120%",
          }}
          src={OurOffice}
          alt="logo"
        />
      </Row>
    </div>
  );
}

export default injectIntl(Our_Company);
