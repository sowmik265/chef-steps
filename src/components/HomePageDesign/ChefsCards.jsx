import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefsSIngleCard from './ChefsSIngleCard';

const ChefsCards = () => {
    const chefsDetails = useLoaderData();
    // console.log(chefsDetails)
    return (
        <div>
            <p className='font-extrabold  text-5xl text-yellow-400 drop-shadow-2xl text-center mt-10 mb-10'>Our Experienced Chefs !!</p>
            {
                chefsDetails.map(chefscards =>
                    <ChefsSIngleCard key={chefscards.id} chefscards={chefscards}> </ChefsSIngleCard>
                )
            }
        </div>
    );
};

export default ChefsCards;