import React from 'react';
import Banner from './Banner';
import PopularClass from './PopularClass';
import Slider from './Slider';

const Home = () => {
    return (
        <div>
            {/* <Banner></Banner> */}
            <Slider></Slider>
            <PopularClass></PopularClass>
        </div>
    );
};

export default Home;