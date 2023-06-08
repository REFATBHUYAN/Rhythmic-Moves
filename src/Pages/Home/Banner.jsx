import React from "react";

const Banner = () => {
  return (
    <>
      <div className="relative carousel w-full sm:h-[400px] md:h-[600px] rounded-md">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/PwXpHh0/istockphoto-1205900002-612x612.jpg"
            className="w-full"
          />
          <div className="absolute hero h-full   w-full">
            <div className="hero-content hero-overlay bg-opacity-60 my-auto text-center text-white">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Experience the Joy of Dance</h1>
                <p className="py-6">
                Experience the vibrant Rhythms of Latin dance in our summer camp! Learn sizzling styles like salsa, bachata, and merengue, infused with contemporary elements. Discover the passion and joy of Latin dance, master intricate footwork, and groove to infectious beats. Let's dance and celebrate!
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/pfp7FTq/istockphoto-1165291144-612x612.jpg"
            className="w-full"
          />
          <div className="absolute hero h-full   w-full">
            <div className="hero-content hero-overlay bg-opacity-60 my-auto text-center text-white">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Discover the joy of Rhythmic Moves</h1>
                <p className="py-6">
                Discover the joy of dance in our summer camp! Join our experienced instructors for a fun-filled week of learning various dance styles, including hip-hop, jazz, and contemporary. Develop your skills, boost your confidence, and make lifelong friends. All skill levels welcome
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img
            src="https://i.ibb.co/P5VpZKq/istockphoto-1098021180-612x612.jpg"
            className="w-full"
          />
          <div className="absolute hero h-full   w-full">
            <div className="hero-content hero-overlay bg-opacity-60 my-auto text-center text-white">
              <div className="max-w-lg">
                <h1 className="text-5xl font-bold">Move to the Rhythms of Life</h1>
                <p className="py-6">
                where dance becomes a transformative journey. Immerse yourself in the power of movement as you explore diverse dance styles and connect with your inner rhythm. Discover the harmony between body and music, unlock self-expression, and embrace the joy and vitality that dance brings to every aspect of life. Join us on this rhythmic adventure
                </p>
              </div>
            </div>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
