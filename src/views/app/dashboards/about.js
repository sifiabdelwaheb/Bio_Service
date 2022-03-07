import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./style.module.css";
import IntlMessages from "../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";
//import registerUserAction from '../../../redux/package/RegisterUserRedux';
import InputPattern from "../../../common/inputPattern";
import Hoc from "../../../hoc/wrapperInputs";
import { Button } from "@material-ui/core";
import IdentifyForms from "../../../common/Client";
import Slider from '../../../components/cards/Slider'
import {
    Row, Col, CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
    CarouselCaption
} from "reactstrap";

import Breadcrumb from "../../../containers/navs/Breadcrumb";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { green, white } from "@mui/material/colors";
import ReactMap from "../../../components/cards/React_maps";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SendIcon from "@mui/icons-material/Send";
import Mission from '../../../assets/images/mission1.png'
import vision from '../../../assets/images/vision1.png'
import nipro from '../../../assets/images/nipro.png'
import OurOffice from '../../../assets/images/maps.drawio (3).png'
import { Class } from "@material-ui/icons";
import { UncontrolledCarousel } from 'reactstrap';

const Wrapper = Hoc(InputPattern);

function About(props) {
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

    return (
        <div className={Classes.Container_Contact}>
            <div className={Classes.about_hidden_image}>
                <div>

                    <Row>
                        <Col className={Classes.About_title}>About Us
                        </Col>{" "}
                    </Row>{" "}
                </div>
            </div>

            <div className={Classes.about_description_component} style={{ backgroundColor: '#fff' }}>


                <div className={Classes.about_description_title}>
                    WHO WE ARE
                </div>
                <div className={Classes.about_description}>

                    We're a sales performance agency. We've been helping businesses drive revenue with the use of inbound marketing and sales enablement tactics since 2012. We're a proud HubSpot Diamond Partner and pride ourselves on using the best tools to help our clients succeed. Our team is made up of smart and talented people that are passionate about creating inbound sales results!
                </div>
                <div className={Classes.about_description_title}>
                    WE'RE DIFFERENT THAN THE REST
                </div>

                <div className={Classes.about_description}>
                    We're rooted in sales. Our parent company, The Center for Sales Strategy (CSS), has been helping sales organizations turn talent into performance for almost 40 years. Unlike other marketing agencies, we're obsessed with ROI and we have the experience to deliver inbound sales results because we've done it ourselves...
                </div>

                <div className={Classes.about_description}>
                    We've been where you are. More than a decade ago, when we needed to grow and diversify how we generated new business at CSS, we turned to inbound marketing and found huge success after launching our sales strategy blog. Once we mastered the art of using thought leadership content for lead generation, we launched LeadG2 so we could help businesses do the exact same thing.
                </div>

            </div>

            <Row style={{ marginLeft: '1%', width: '98%' }}>
                <Col className={Classes.about_component_vision} style={{ backgroundColor: '#fff' }}>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Row className={Classes.about_description_title}>

                            <img
                                style={{
                                    maxWidth: '100px', minWidth: '100px', maxHeight: 'auto', width: '100%',
                                }}
                                src={vision}
                                alt="logo"
                            />

                        </Row>


                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Row className={Classes.about_description_title}>

                            Vision

                        </Row>


                    </Row>

                    <Row className={Classes.about_description}>
                        The group BIO GROUP and its subsidiaries offer their customers-
                        health authorities, hospitals, clinics, treatment networks,pharmaceutical

                        laboratories, a comprehensive range of services and equipments to help
                        them determine their strategy and implement their projects.
                        Thanks to the Group's know-how, it can provide services to the different
                        health professionals at all stages of health policy determination and
                        implementation .

                    </Row>


                </Col>
                <Col className={Classes.about_component_vision} style={{ backgroundColor: '#fff' }}>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Row className={Classes.about_description_title}>

                            <img
                                style={{
                                    maxWidth: '100px', minWidth: '100px', maxHeight: 'auto', width: '100%',
                                }}
                                src={Mission}
                                alt="logo"
                            />

                        </Row>


                    </Row>
                    <Row style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Row className={Classes.about_description_title}>

                            Mission

                        </Row>


                    </Row>


                    <Row className={Classes.about_description}>
                        Our Mission is to provide the best customer service:

                        Offering solutions and products that are verifiably effective -
                        that is our vision.She is our guiding principle on all levels -
                        whether in strategic decision making within the management
                        teams or in the daily operative work of each of our employees.
                        Our vision always pushes us to develop and offer high quality
                        solutions and products which can be proven to be effective and
                        efficient in their application
                    </Row>


                </Col>
            </Row>


            <Row style={{ padding: '4%', backgroundColor: '#FFF', width: '98%', marginLeft: '1%', marginTop: '4%', borderRadius: '1%' }}>
                <Col className={Classes.about_vision_title} md={2}>
                    Partners
                </Col>

                <Col>
                    <Slider />
                </Col>
            </Row>

            <Row className={Classes.about_vision_title} style={{ padding: '5%', backgroundColor: '#FFF', width: '100%',  marginTop: '4%', borderRadius: '2%', display: 'flex', justifyContent: 'center' }}>
                <Row>
                    Our Offices</Row>

            </Row>
            <Row className={Classes.about_our_vision} style={{ padding: '5%', backgroundColor: '#FFF', width: '100%',  borderRadius: '2%', display: 'flex', justifyContent: 'center' }}>We have six offices across the world, spanning Europe, Africa and the Middle East.

            </Row>

            <Row style={{ backgroundColor: '#fff', width: '100%', display: 'flex', justifyContent: 'center' }}>
                <img
                    style={{
                        maxHeight: 'auto', width: '90%',
                        height: '100%',
                        marginRight: '5%',
                        zoom: '120%'
                    }}
                    src={OurOffice}
                    alt="logo"
                />

            </Row>

        </div>
    );
}

export default injectIntl(About);
