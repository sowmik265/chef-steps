import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

    const [buttonClicked, setButtonClicked] = useState(false);
    const handleButtonClick = () => {
        toast.success("Added to Favorite!");
        setButtonClicked(true);
    };


    return (
        <div className='mt-10 m-4'>
            <div className="card lg:card-side bg-base-100 shadow-xl mx-auto">
                <figure className='w-full md:w-1/3'><img src={chefPicture} alt="Album" /></figure>
                <div className="card-body w-full md:w-2/3 ">
                    <h2 className="card-title text-xl font-extrabold text-green-700">{chefName}</h2>
                    <p className='font-extrabold text-green-700'>Number of Recipes : <span className='font-semibold'>   {numberOfRecipes}</span> </p>
                    <p className="card-title text-xl font-extrabold text-green-700">About-  <br></br> <span className='font-semibold'> {chefBio}</span> </p>
                    <p className="card-title text-xl font-extrabold text-green-700">Likes : <span className='font-semibold'> {likes}</span> </p>
                    <p className="card-title text-xl font-extrabold text-green-700">Experience : <span className='font-semibold'> {yearsOfExperience}</span></p>

                </div>
            </div>

            <div className='font-extrabold  text-5xl text-lime-600 drop-shadow-2xl text-center mt-10'>
                Recipes of {chefName} !!
            </div>

            <div className='flex flex-col md:flex-row mx-auto justify-between items-center mt-10'>



                <div className="card w-96 text-black font-bold border border-yellow-400">
                    <div className="card-body">
                        <h2 className="card-title text-red-400 font-extrabold"> <span>{recipes1}</span></h2>
                        <p className=' text-cyan-500'>Ingredients : <span className='text-bold text-violet-800'>{ingredients1}</span></p>
                        <p className=' text-cyan-500'>Cooking Method: <span className='text-bold text-violet-800'>{cookingMethod1}</span></p>
                        <p className=' text-cyan-500'>Rating : <span className='text-bold text-violet-800'>{ratings1}</span></p>
                        <div className="card-actions justify-end">
                            <button onClick={handleButtonClick} disabled={buttonClicked} className="btn bg-yellow-400 border-none hover:bg-blue-700">Favorite</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 text-black font-bold border border-yellow-400">
                    <div className="card-body">
                        <h2 className="card-title text-red-400 font-extrabold"> <span>{recipes2}</span></h2>
                        <p className=' text-cyan-500'>Ingredients : <span className='text-bold text-violet-800'>{ingredients2}</span></p>
                        <p className=' text-cyan-500'>Cooking Method: <span className='text-bold text-violet-800'>{cookingMethod2}</span></p>
                        <p className=' text-cyan-500'>Rating : <span className='text-bold text-violet-800'>{ratings2}</span></p>
                        <div className="card-actions justify-end">
                            <button onClick={handleButtonClick} disabled={buttonClicked} className="btn bg-yellow-400 border-none hover:bg-blue-700">Favorite</button>
                        </div>
                    </div>
                </div>

                <div className="card w-96 text-black font-bold border border-yellow-400">
                    <div className="card-body">
                        <h2 className="card-title text-red-400 font-extrabold"> <span>{recipes3}</span></h2>
                        <p className=' text-cyan-500'>Ingredients : <span className='text-bold text-violet-800'>{ingredients3}</span></p>
                        <p className=' text-cyan-500'>Cooking Method: <span className='text-bold text-violet-800'>{cookingMethod3}</span></p>
                        <p className=' text-cyan-500'>Rating : <span className='text-bold text-violet-800'>{ratings3}</span></p>
                        <div className="card-actions justify-end">
                            <button onClick={handleButtonClick} disabled={buttonClicked} className="btn bg-yellow-400 border-none hover:bg-blue-700">Favorite</button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />

        </div>
    );
};

export default ChefDetails;