import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefDetails = () => {

    const { chefId } = useParams();
    // console.log(chefId)
    const chefDetailsData = useLoaderData()
    const [chef, setChef] = useState([])
    useEffect(() => {
        const chefData = chefDetailsData.find(chef => chef.id == chefId);
        setChef(chefData)

    }, [])

    // console.log(chef)
    const { chefPicture, chefName, numberOfRecipes, likes, chefBio, yearsOfExperience, recipes1, recipes2, recipes3, ingredients1, ingredients2, ingredients3, cookingMethod1, cookingMethod2, cookingMethod3, ratings1, ratings2, ratings3 } = chef;
    return (
        <div className='mt-10 m-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-auto">
                <figure className='w-full md:w-1/3'><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body w-full md:w-2/3 ">
                    <h2 className="card-title">{chefName}</h2>
                    <p>Number of Recipes : {numberOfRecipes}</p>
                    <p>About : {chefBio}</p>
                    <p>Likes : {likes}</p>
                    <p>Experience : {yearsOfExperience}</p>

                </div>
            </div>

            <div className='flex flex-col md:flex-row mx-auto justify-between mt-10'>



                <div className="card w-96 text-black font-bold">
                    <div className="card-body">
                        <h2 className="card-title">{recipes1}</h2>
                        <p>Ingredients : {ingredients1}</p>
                        <p>Cooking Method: {cookingMethod1} </p>
                        <p>Rating : {ratings1}</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Favorite</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 text-black font-bold">
                    <div className="card-body">
                        <h2 className="card-title">{recipes2}</h2>
                        <p>Ingredients : {ingredients2}</p>
                        <p>Cooking Method: {cookingMethod2} </p>
                        <p>Rating : {ratings2}</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Favorite</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 text-black font-bold">
                    <div className="card-body">
                        <h2 className="card-title">{recipes3}</h2>
                        <p>Ingredients : {ingredients3}</p>
                        <p>Cooking Method: {cookingMethod3} </p>
                        <p>Rating : {ratings3}</p>
                        <div className="card-actions justify-end">
                            <button className="btn">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;