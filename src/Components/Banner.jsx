import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Banner = () => {
  return (
    <div className="w-full h-[60vh] bg-blue-50 flex items-center justify-center mb-10">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        autoplay={{
          delay: 3000,
          disableOnInteraction: false, 
        }}
        loop={true} 
        speed={1000}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <SwiperSlide>
          <div className="bg-blue-500 text-white text-3xl font-bold h-[60vh] flex items-center justify-center overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/assets/herohealth.jpg"
              alt=""
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative bg-blue-600 text-white h-[60vh] flex items-center justify-start overflow-hidden">
            <img
              src="/assets/care pet in winter.jpg"
              alt="Winter pet hero"
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 px-8 md:px-16 max-w-lg text-left">
              <h1 className="text-4xl md:text-6xl font-bold mb-3 leading-tight">
                Winter Wellness Starts with Love
              </h1>
              <p className="text-lg md:text-2xl font-medium">
                Find trusted pet care services and expert health advice this
                season.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-blue-700 object-center  text-white text-3xl font-bold h-[60vh] flex items-center justify-center">
            <img className="w-full" src="assets/hero2.png" alt="" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
