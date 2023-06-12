import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const Slider = () => {
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className="hero min-h-screen bg-[url('https://i.ibb.co/PwXpHh0/istockphoto-1205900002-612x612.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md md:max-w-lg">
                <h1 className="mb-5 text-5xl text-white font-bold">
                  Experience the Joy of Dance
                </h1>
                <p className="mb-5 font-semibold">
                  Experience the vibrant Rhythms of Latin dance in our summer
                  camp! Learn sizzling styles like salsa, bachata, and merengue,
                  infused with contemporary elements. Discover the passion and
                  joy of Latin dance, master intricate footwork, and groove to
                  infectious beats. Let's dance and celebrate!
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[url('https://i.ibb.co/pfp7FTq/istockphoto-1165291144-612x612.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md md:max-w-lg">
                <h1 className="mb-5 text-5xl text-white font-bold">
                  Discover the joy of Rhythmic Moves
                </h1>
                <p className="mb-5 font-semibold">
                  Discover the joy of dance in our summer camp! Join our
                  experienced instructors for a fun-filled week of learning
                  various dance styles, including hip-hop, jazz, and
                  contemporary. Develop your skills, boost your confidence, and
                  make lifelong friends. All skill levels welcome
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero min-h-screen bg-[url('https://i.ibb.co/P5VpZKq/istockphoto-1098021180-612x612.jpg')]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md md:max-w-lg">
                <h1 className="mb-5 text-5xl text-white font-bold">
                  Move to the Rhythms of Life
                </h1>
                <p className="mb-5 font-semibold">
                  where dance becomes a transformative journey. Immerse yourself
                  in the power of movement as you explore diverse dance styles
                  and connect with your inner rhythm. Discover the harmony
                  between body and music, unlock self-expression, and embrace
                  the joy and vitality that dance brings to every aspect of
                  life. Join us on this rhythmic adventure
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
