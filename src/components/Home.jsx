import React from 'react';
import Carousel from './HomePageDesign/Carousel';
import TextImg from './HomePageDesign/TextImg';
import ChefsCards from './HomePageDesign/ChefsCards';
import Banner from './HomePageDesign/Banner';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Carousel></Carousel>
            <TextImg></TextImg>
            <ChefsCards></ChefsCards>
        </div>
    );
};

export default Home;