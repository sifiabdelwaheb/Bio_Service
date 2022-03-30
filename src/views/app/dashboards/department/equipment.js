import React, { useState, useEffect, Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import Classes from "./style.module.css";
import IntlMessages from "../../../../helpers/IntlMessages";
import { injectIntl } from "react-intl";

import ProductsCard from "../../../../components/cards/ProductsCard";
import RealisationCard from "../../../../components/cards/RealisationCard";

import realisation_data from "../../../../data/realisation";
import products_data from "../.././../../data/products";

import Breadcrumb from "../../../../containers/navs/Breadcrumb";

import {
  Row,
  Col,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
} from "reactstrap";

function Equipment(props) {
  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState(1);
  const [data, setData] = useState(realisation_data);
  const [products, setProducts] = useState(products_data);
  useEffect(() => {
    setProducts(products_data);
    console.log("details**************", products);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  useEffect(() => {
    setData(realisation_data);
    console.log("details**************", data);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  });

  return (
    <div className={Classes.container_departments}>
      <div className={Classes.equipment_hidden_image}>
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
            <Col className={Classes.department_title}>Equipments</Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <div className={Classes.department_description}>
                The Cardiologie machine mixes and monitors the dialysate.
                Dialysate is the fluid that helps remove the unwanted waste
                products from your blood.
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default injectIntl(Equipment);
