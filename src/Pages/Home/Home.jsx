import React from 'react';
import PopularClass from './PopularClass';
import Slider from './Slider';
import PopularInstructor from './PopularInstructor';
import WeProvide from './WeProvide';
import { ScrollRestoration } from 'react-router-dom';
import { useTime } from 'framer-motion';
import useTitle from '../../Hooks/useTitle';

const Home = () => {
    useTitle('Home')
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