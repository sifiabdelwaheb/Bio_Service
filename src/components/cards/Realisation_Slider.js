import React from "react";
import Classes from "./style.module.css";

import Slider from "react-slick";
import logo from "../../assets/svg/bioservice.svg";

import realisation_data from "../../data/realisation";
import images from "./images";
console.log("realisation_data************", realisation_data);
export default function RealisaionSlider(props) {
  return (
    <div>
      <Slider
        dots={false}
        slidesToShow={1}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={3000}
        pauseOnHover={false}
        fade={true}
        style={{
          
          marginTop: "4%",
          width: "100%",
          maxWidth: "690px",
        }}
      >
        {props.image.map((item) => (
          <a key={item.id}>
            {" "}
            <img
              src={item.img}
              className={Classes.realisation_machine_images_hidden}
            />
          </a>
        ))}
      </Slider>
    </div>
  );
}
