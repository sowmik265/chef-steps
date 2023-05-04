import React from 'react';
import { Link } from 'react-router-dom';
import { GrLike } from 'react-icons/Gr';
import { GiCook } from 'react-icons/Gi';
import { VscBriefcase } from 'react-icons/vsc';


const ChefsSIngleCard = ({ chefscards }) => {

    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id } = chefscards;

    return (



        <div className=' m-2 w-full md:w-2/3 mx-auto '>
            <div className="card bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 h-96">
                    <img src={chefPicture} alt="Shoes" className="rounded-xl h-full" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-xl font-extrabold text-green-700">{chefName}</h2>
                    <div>
                        <p className='flex items-center text-teal-900 gap-2 font-semibold'><VscBriefcase /> {yearsOfExperience} years of Experience !</p>
                        <p className='flex items-center text-teal-900 gap-2 font-semibold'><GiCook /> {numberOfRecipes} recipes !!</p>
                        <p className='flex items-center text-teal-900 gap-2 font-semibold'> <GrLike />  {likes} likes</p>
                    </div>

                    <div className="card-actions">
                        <Link to={`/chef-details/${id}`}><button className="btn bg-yellow-400 border-none">View Recipes</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefsSIngleCard;