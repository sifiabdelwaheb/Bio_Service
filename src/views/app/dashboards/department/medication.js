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

function Medication(props) {
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
      <div className={Classes.medication_hidden_image}>
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
            <Col className={Classes.department_title}>Medication</Col>{" "}
          </Row>{" "}
          <Row>
            <Col>
              <div className={Classes.department_description}>
                The Cardiologie machine mixes and monitors the dialysate. Dialysate
                is the fluid that helps remove the unwanted waste products from
                your blood.
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div style={{ padding: "5%" }}>
        <div className={Classes.department_product_title}>Cardiologie Products</div>
        <hr style={{ minHeight: "2px" }} />
        <Nav tabs>
          {products.map((item) => (
            <div>
              <NavItem>
                <NavLink
                  className={activeTab == item.id ? "active" : ""}
                  onClick={() => setActiveTab(item.id)}
                >
                  {item.title}
                </NavLink>
              </NavItem>
            </div>
          ))}
        </Nav>
        <TabContent activeTab={activeTab}>
          {products.map((item) => (
            <TabPane tabId={item.id}>
              <div
                style={{ marginTop: "5%" }}
                class="shadow p-3 mb-5 bg-white rounded"
              >
                <ProductsCard
                  title={item.title}
                  image={item.image}
                  description={item.description}
                />
              </div>{" "}
            </TabPane>
          ))}
        </TabContent>
      </div>

      <div style={{ padding: "5%" }}>
        <div
          style={{
            borderRadius: "12px",
          }}
        >
          <div className={Classes.department_realisations_title}>
          Cardiologie Realisations
          </div>
          <hr style={{ minHeight: "2px" }} />
        </div>
        <div
          style={{
            paddingLeft: "2%",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {data.map((item) => (
            <div
              key={item.id}
              href={item.link}
              style={{ marginRight: "2%", cursor: "pointer", maxWidth: "100%" }}
            >
              {" "}
              <RealisationCard
                name={item.name}
                image={item.image}
                description={item.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default injectIntl(Medication);
