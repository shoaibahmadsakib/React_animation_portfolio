import React from "react";
import "../css/Clientshow.css";
import { Swiper, SwiperSlide } from "swiper/react";
import client1 from "../assets/client1.png";

import client3 from "../assets/client3.png";
import client4 from "../assets/client4.png";


// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css";
import TitleStyle from "./title component/TitleStyle";

const ClientShow = () => {
  return (
    <div className="clientshow">
     <TitleStyle>CLIENT SHOWCASE</TitleStyle>
     <div className="background_style">
       
     </div>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={client1} alt="" />
        </SwiperSlide>
       
        <SwiperSlide>
          <img src={client3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={client4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={client1} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ClientShow;
