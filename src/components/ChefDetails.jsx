import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {

    const { chefId } = useParams();
    console.log(chefId)
    const chefDetailsData = useLoaderData()
    const [chef, setChef] = useState([])
    useEffect(() => {
        const chefData = chefDetailsData.find(chef => chef.id == chefId);
        setChef(chefData)
        
    }, [])

    console.log(chef)
    return (
        <div>
        {chef.chefBio}
        hellooooooooooooooooooooooo
        </div>
    );
};

export default ChefDetails;