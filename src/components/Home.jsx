import React from 'react';
import Carousel from './HomePageDesign/Carousel';
import TextImg from './HomePageDesign/textImg';
import ChefsCards from './HomePageDesign/ChefsCards';

const Home = () => {
    return (
        <div className='container'>

            <ChefsCards></ChefsCards>
            
            <Carousel></Carousel>
            {/* <TextImg></TextImg> */}

        </div>
    );
};

export default Home;