import React from 'react';
import { Link } from 'react-router-dom';


const ChefsSIngleCard = ({ chefscards }) => {

    const {chefPicture,chefName,yearsOfExperience,numberOfRecipes,likes,id} = chefscards ;
    // console.log(chefscards)
    return (
        <div className='flex flex-wrap justify-center items-center h-full'>

            <div className="card lg:card-side bg-base-100 shadow-xl w-full md:w-3/5 px-2 py-4 my-2">
                <figure><img className="w-96 h-96" src={chefPicture} alt="Album" /></figure>
                <div className="card-body bg-yellow-300">
                    <h2 className="card-title">{chefName}</h2>
                    <p><span className='text-xl font-extrabold text-violet-900'>{yearsOfExperience} </span>years of experience!!!</p>
                    <div>

                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/chef-details/${id}`}><button className="btn btn-primary">Listen</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default ChefsSIngleCard;