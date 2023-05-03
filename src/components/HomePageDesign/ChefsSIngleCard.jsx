import React from 'react';
import { Link } from 'react-router-dom';


const ChefsSIngleCard = ({ chefscards }) => {

    const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes, id } = chefscards;

    return (

        <div className=''>
            
            <div className=' m-2 col-span-2'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure className="px-10 pt-10 h-96">
                        <img src={chefPicture} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">{chefName}</h2>
                        <div>
                            <p>Experience : {yearsOfExperience} years !</p>
                            <p> {numberOfRecipes} recipes !!</p>
                            <p>{likes} likes</p>
                        </div>

                        <div className="card-actions">
                            <Link to={`/chef-details/${id}`}><button className="btn btn-primary">View details</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    );
};

export default ChefsSIngleCard;