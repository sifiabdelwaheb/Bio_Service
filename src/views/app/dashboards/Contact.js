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

import { Row, Col} from "reactstrap";

import Breadcrumb from "../../../containers/navs/Breadcrumb";

import EmailIcon from "@mui/icons-material/Email";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { green, white } from "@mui/material/colors";
import ReactMap from "../../../components/cards/React_maps";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import SendIcon from "@mui/icons-material/Send";

const Wrapper = Hoc(InputPattern);

function Contact(props) {
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

    //const [selectedId, setSelectedId] = useState()

    function MapPlaceholder() {
        return (
            <p>
                Map of London.{" "}
                <noscript> You need to enable JavaScript to see this map. </noscript>{" "}
            </p>
        );
    }

    return (
        <div className={Classes.Container_Contact}>
            <div className={Classes.contact_image}>
                <div>
                    <Row>
                        <Col className={Classes.Contact_title}>
                            <Breadcrumb
                                match={props.match}
                                style={{ backgroundColor: "red" }}
                            />{" "}
                        </Col>{" "}
                    </Row>
                    <Row>
                        <Col className={Classes.Contact_title}> Contact </Col>{" "}
                    </Row>{" "}
                </div>
            </div>
            <Row className={Classes.contact_component}>
                <div>WE 'RE ALWAYS READY AND HAPPY TO HELP </div>{" "}
            </Row>{" "}
            <Row className={Classes.contact_component}>
                <div className={Classes.contact_component_description}>
                    Bio service is committed to providing you with the highest level of
                    service.If you have questions or any concerns, please feel free to
                    contact us.{" "}
                </div>{" "}
            </Row>{" "}
            <Row
                style={{
                    paddingTop: "-10%",
                    backgroundColor: "white",
                    width: "98%",
                    marginLeft: "1%",
                }}
            >
                <Col
                    style={{
                        minWidth: "500px",
                        backgroundColor: "white",
                        width: "90%",
                        borderRadius: "12px",
                    }}
                >
                    <div className={Classes.Contact_title_info}>Send US a Message</div>
                    <div className={Classes.contact_us_description}>
                        For any inquiry or question please send us a message and we will
                        contact you back ASAP
                    </div>{" "}
                    <Wrapper
                        // onClick={() => console.log(onSendForm(contactUsform))}
                        form={identifyForm}
                        textButton="Connexion"
                        setValidation={setValidation}
                        setClick={setClick}

                    // errorMessage={redux.contactUs.response}
                    />{" "}
                    <Button
                        variant="contained"
                        onClick={() => { }}
                        style={{
                            backgroundColor: "#3e884f",
                            fontWeight: "bold",
                            height: "42px",
                            color: "white",
                            borderRadius: "12px",

                            marginBottom: "22px",
                        }}
                    >
                        SEND MESSAGE{" "}
                        <SendIcon
                            sx={{ color: green[10], fontSize: 14 }}
                            style={{ marginLeft: "5px" }}
                        />{" "}
                    </Button>
                </Col>

                <Col
                    style={{
                        minWidth: "500px",
                        backgroundColor: "white",
                        borderRadius: "12px",
                    }}
                >
                    <Row>
                        <Col>
                            <div className={Classes.Contact_title_info}>Contact Info</div>{" "}
                            <Row>
                                <Col className={Classes.contact_adress}>
                                    <AddLocationIcon sx={{ color: green[400] }} />{" "}
                                    <div>
                                        Visit Us: 3 Avenue du Roi Abedlaziz Al Saoud 2092 El Manar 2{" "}
                                    </div>{" "}
                                </Col>{" "}
                            </Row>{" "}
                            <Row>
                                <Col className={Classes.contact_adress}>
                                    <div>
                                        <PhoneIphoneIcon
                                            sx={{ color: green[400], fontSize: 20 }}
                                            style={{ marginLeft: "5px" }}
                                        />
                                        Call Us: +216 71889729, 70860282, 71872271
                                    </div>
                                </Col>
                            </Row>{" "}
                            <Row>
                                <Col className={Classes.contact_adress}>
                                    <div>
                                        <EmailIcon
                                            sx={{ color: green[400], fontSize: 20 }}
                                            style={{ marginLeft: "6px" }}
                                        />
                                        E - mail: bioservice @planet.tn
                                    </div>
                                </Col>
                            </Row>
                        </Col>{" "}
                    </Row>{" "}
                    <Row>
                        <div className={Classes.maps_component}>
                            <ReactMap />
                        </div>{" "}
                    </Row>
                </Col>
            </Row>
        </div>
    );
}

export default injectIntl(Contact);
