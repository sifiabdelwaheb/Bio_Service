import React from "react";
import "./styles.css";



import Slider from "react-slick";
import logo from '../../assets/svg/bioservice.svg'

import IHTlogo from '../../assets/images/IHTlogo.png'
import euromed from '../../assets/images/euromed.png'
import hitech from '../../assets/images/hitech medical.png'
import ceracarta from '../../assets/images/ceracarta (2).png'
import nipro from '../../assets/images/Nipro_logo-medicalEurope_HD-1.jpg'
import mekon from '../../assets/images/mekon.png'


export default function App() {
  return (
    <div style={{ marginTop: '4%' }}>
      <Slider
        dots={false}
        slidesToShow={5}
        slidesToScroll={1}
        autoplay={true}
        autoplaySpeed={2000}
        pauseOnHover={true}

      >
        <img src={IHTlogo} style={{ height: '100px', backgroundColor: 'red' }} />
        <img src={euromed} style={{ height: '100px' }} />
        <img src={hitech} style={{ height: '100px' }} />
        <img src={ceracarta} style={{ height: '100px', marginTop: '20%' }} />
        <img src={nipro} style={{ height: '100px' }} />
        <img src={mekon} style={{ height: '100px' }} />
      </Slider>
    </div>
  );
}
