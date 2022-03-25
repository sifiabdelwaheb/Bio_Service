import React from "react";

import Slider from "react-slick";


import images from "./images";
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
          <a key={item.id} href={item.link}>
            {" "}
            <img
              src={item.src}
              alt={item.alt}
              style={{ height: "100px", backgroundColor: "red" }}
            />
          </a>
        ))}
      </Slider>
    </div>
  );
}
