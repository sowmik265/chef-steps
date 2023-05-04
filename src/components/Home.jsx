import React from 'react';
import Carousel from './HomePageDesign/Carousel';
import TextImg from './HomePageDesign/TextImg';
import ChefsCards from './HomePageDesign/ChefsCards';
import Banner from './HomePageDesign/Banner';
import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { CSpinner } from '@coreui/react'



const Home = () => {
    const {loading} = useContext(AuthContext);
    if(loading){
        return <CSpinner color="success" variant="grow"/>
    }

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