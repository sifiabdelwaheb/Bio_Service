import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./style.module.css";
import IntlMessages from "../../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";

import machine from "../../../../assets/images/Dialysis.jpg";
import equipements from "../../../../assets/images/EQUIPEMENTS.jpg";
import water from "../../../../assets/images/water_traitment.jpg";
import DepartmentCard from "../../../../components/cards/DepartmentCard";
import RealisationCard from "../../../../components/cards/RealisationCard";
import open_project from "../../../../assets/images/open_project.webp";
import open_project1 from "../../../../assets/images/open_project1.jpeg";
import Box from "@mui/material/Box";

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

import Breadcrumb from "../../../../containers/navs/Breadcrumb";
import InputPattern from "../../../../common/inputPattern";
import { Button } from "@material-ui/core";

function Dialysis(props) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className={Classes.Container_Contact}>
      <div className={Classes.dialysis_hidden_image}>
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
            <Col className={Classes.About_title}>Dialysis</Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <div className={Classes.department_description}>
                The dialysis machine mixes and monitors the dialysate. Dialysate
                is the fluid that helps remove the unwanted waste products from
                your blood.
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ padding: "5%" }}>
        <div className={Classes.department_product_title}>Our Products</div>
        <hr style={{ minHeight: "2px" }} />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={activeTab == "1" ? "active" : ""}
              onClick={() => setActiveTab("1")}
            >
              Dialysis Machine
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "2" ? "active" : ""}
              onClick={() => setActiveTab("2")}
            >
              Water Treatment Systems
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={activeTab == "3" ? "active" : ""}
              onClick={() => setActiveTab("3")}
            >
              EQUIPEMENTS
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            {" "}
            <div
              class="shadow p-3 mb-5 bg-white rounded"
              style={{
                backgroundColor: "#fff",
                padding: "1%",
                borderRadius: "12px",
                marginTop:'5%'
              }}
            >
              <div className={Classes.department_dialysis_product_title}>
                Dialysis Machine{" "}
              </div>
              <hr style={{ minHeight: "2px" }} />
              <Row>
                <Col>
                  <img
                    src={machine}
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
                    <Col
                      className={Classes.dialysis_machine_product_description}
                    >
                      The dialysis machine mixes and monitors the dialysate.
                      Dialysate is the fluid that helps remove the unwanted
                      waste products from your blood.
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
          </TabPane>
          <TabPane tabId="2">
            {" "}
            <div style={{ marginTop: "5%"}}>
              <div
                class="shadow p-3 mb-5 bg-white rounded"
                style={{
                  backgroundColor: "#000",
                  padding: "1%",
                  borderRadius: "12px",
                  maxWidth: "100%",
                }}
              >
                <div className={Classes.department_dialysis_product_title}>
                  Water Treatment Systems{" "}
                </div>
                <hr style={{ minHeight: "2px" }} />
                <Row>
                  <Col>
                    <Row>
                      <div className={Classes.dialysis_machine_product_title}>
                        Products{" "}
                      </div>
                    </Row>
                    <Row>
                      <Col
                        className={Classes.dialysis_machine_product_description}
                      >
                        The dialysis machine mixes and monitors the dialysate.
                        Dialysate is the fluid that helps remove the unwanted
                        waste products from your blood.
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
                  <Col>
                    <img
                      src={water}
                      alt="iconplus"
                      className={Classes.dialysis_machine_images_hidden}
                    />
                  </Col>
                </Row>
              </div>{" "}
            </div>
          </TabPane>
          <TabPane tabId="3">
            <div
              style={{ marginTop: "5%" }}
              class="shadow p-3 mb-5 bg-white rounded"
            >
              <DepartmentCard
                title="EQUIPEMENTS"
                image={equipements}
                description=" The dialysis machine mixes and monitors the dialysate. Dialysate
                is the fluid that helps remove the unwanted waste products from
                your blood."
              />
            </div>
          </TabPane>
        </TabContent>
      </div>

      <div style={{ padding: "5%" }}>
        <div
          style={{
            borderRadius: "12px",
          }}
        >
          <div className={Classes.department_product_title}>
            Our Realisations
          </div>
          <hr style={{ minHeight: "2px" }} />
        </div>
        <Row>
          <Col>
            <RealisationCard
              name="project 1"
              image={open_project}
              description=" Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project."
            />
          </Col>
          <Col>
            <RealisationCard
              name="project 2"
              image={open_project1}
              description=" Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project."
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <RealisationCard
              name="project 1"
              image={open_project}
              description=" Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project."
            />
          </Col>
          <Col>
            <RealisationCard
              name="project 2"
              image={open_project1}
              description=" Project descriptions provide the following details to the applicants: the problem the project will address, a set of goals for the project."
            />
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default injectIntl(Dialysis);
