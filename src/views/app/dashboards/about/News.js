import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./style.module.css";
import IntlMessages from "../../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";
import machine from "../../../../assets/images/event.jpg";
import EventCard from "../../../../components/cards/EventCard";
//import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import events_data from "../.././../../data/events";
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
import { image } from "d3";

function News(props) {
  const dispatch = useDispatch();

  return (
    <div className={Classes.Container_Contact}>
      <div className={Classes.dialysis_hidden_image}>
        <div>
          <Row>
            <Col>
              <Breadcrumb match={props.match} />{" "}
            </Col>{" "}
          </Row>
          <Row>
            <Col className={Classes.About_title}>News</Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <div className={Classes.department_description}>
                News is information about current events. This may be provided
                through many different media: word of mouth, printing, postal
                systems, broadcasting, ...
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <div style={{ paddingLeft: "10%", paddingTop: "5%" }}>
        <div className={Classes.department_product_title}>News & Events</div>
        <hr style={{ minHeight: "2px" }} />
      </div>
      <div
        style={{ width: "80%", marginLeft: "10%" }}
        class="shadow p-3 mb-5 bg-white rounded"
      >
        {events_data.map((item) => (
          <div
            key={item.id}
            href={item.link}
            style={{ justifyContent: "space-between" }}
          >
            {" "}
            <EventCard
              date={item.date}
              title={item.title}
              image={item.image}
              location={item.location}
              description={item.description}
            />
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default injectIntl(News);
