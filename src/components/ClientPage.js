import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/client.css";
import { Container } from "react-bootstrap";
// Light box adding method
import { SRLWrapper } from "simple-react-lightbox";
import ThreeBar from "../assets/3 bar.svg";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// Import Images


import img3 from "../assets/photo3.png";

import img5 from "../assets/photo5.png";
import img6 from '../assets/sample_projects/site1.jpg'
import img7 from '../assets/sample_projects/site2.png'
import img8 from '../assets/sample_projects/site3.jpg'
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";
import TitleStyle from "./title component/TitleStyle";
// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Work = () => {

  return (
    <div className="work">
      <TitleStyle>SAMPLE PROJECT</TitleStyle>
      <Container style={{ height: "auto" }}>
        <Swiper
          style={{ zIndex: "0" }}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 10,
            slidesPerView: 2,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          <SRLWrapper>
            <SwiperSlide>
              <img alt="" src={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img8} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img9} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img6} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img7} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img8} />
            </SwiperSlide>
          </SRLWrapper>
        </Swiper>
      </Container>
    </div>
  );
};

export default Work;
