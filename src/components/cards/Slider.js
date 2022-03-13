import React from "react";
import "./styles.css";

import Slider from "react-slick";
import logo from "../../assets/svg/bioservice.svg";

import IHTlogo from "../../assets/images/IHTlogo.png";
import euromed from "../../assets/images/euromed.png";
import hitech from "../../assets/images/hitech medical.png";
import ceracarta from "../../assets/images/ceracarta (2).png";
import nipro from "../../assets/images/Nipro_logo-medicalEurope_HD-1.jpg";
import mekon from "../../assets/images/mekon.png";
import images from "./images"
export default function App() {
  return (
    <div style={{ marginTop: "4%" }}>
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        pauseOnHover={true}
      >
        {images.map((item) => (
          <div key={item.id}>
            {" "}
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: "100px", backgroundColor: "red" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
