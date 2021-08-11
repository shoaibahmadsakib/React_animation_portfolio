import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../css/client.css";
import { Container } from "react-bootstrap";
// Light box adding method
import { SRLWrapper } from "simple-react-lightbox";
import ThreeBar from '../assets/3 bar.svg'
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";

// Import Images
import img1 from "../assets/project1.jpg";
import img2 from "../assets/photo2.png";
import img3 from "../assets/photo3.png";
import img4 from "../assets/photo4.png";
import img5 from "../assets/photo5.png";
// import Swiper core and required modules
import SwiperCore, { EffectCoverflow, Pagination } from "swiper/core";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Pagination]);

const Work = () => {
  return (
    <div className="work">
      <div className="text">
        <h1>SAMPLE PROJECT</h1>
      <img src={ThreeBar} alt="" />
      </div>
      <Container style={{height:'auto'}}>
        <Swiper
        style={{zIndex:'0'}}
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
              <img alt="" src={img1} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img2} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img4} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img3} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img5} />
            </SwiperSlide>
            <SwiperSlide>
              <img alt="" src={img3} />
            </SwiperSlide>
          </SRLWrapper>
        </Swiper>
      </Container>
    </div>
  );
};

export default Work;
