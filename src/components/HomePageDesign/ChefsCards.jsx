import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsSIngleCard from './ChefsSIngleCard';

const ChefsCards = () => {
    const chefsDetails = useLoaderData();
    // console.log(chefsDetails)
    return (
        <div>
           {
            chefsDetails.map( chefscards => 
                <ChefsSIngleCard key={chefscards.id} chefscards={chefscards}> </ChefsSIngleCard>
                )
           }
        </div>
    );
};

export default ChefsCards;