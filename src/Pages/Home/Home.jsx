import React from 'react';
import PopularClass from './PopularClass';
import Slider from './Slider';
import PopularInstructor from './PopularInstructor';
import WeProvide from './WeProvide';
import { ScrollRestoration } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <PopularClass></PopularClass>
            <PopularInstructor></PopularInstructor>
            <WeProvide></WeProvide>
            <ScrollRestoration />
        </div>
    );
};

export default Home;