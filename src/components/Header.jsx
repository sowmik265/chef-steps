import React, { useContext } from 'react';

import ActiveLink from './ActiveRoutes/ActiveLink';
import { AuthContext } from '../providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <div>
            <div className="navbar bg-yellow-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li className='font-extrabold'><ActiveLink to='/'>Home</ActiveLink></li>
                            <li className='font-extrabold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                            <li className='font-extrabold'><ActiveLink to='/login'>Login</ActiveLink></li>
                            <li className='font-extrabold'><ActiveLink to='/register'>Register</ActiveLink></li>
                            {
                                user &&
                                <div className='flex'>
                                    <li>
                                        <div className="navbar-end">
                                            <div className="w-24 rounded-full">
                                                <img className='image-full rounded-full' src={user?.photoURL} title={user?.displayName} />
                                            </div>
                                        </div>
                                    </li>
                                    <li className='font-extrabold'><button onClick={handleLogOut}><ActiveLink>Logout</ActiveLink></button></li>
                                </div>
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">chefSteps</a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='font-extrabold'><ActiveLink to='/'>Home</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/blog'>Blog</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/login'>Login</ActiveLink></li>
                        <li className='font-extrabold'><ActiveLink to='/register'>Register</ActiveLink></li>
                        {
                            user &&
                            <div className='flex'>
                                <li>
                                    <div className="navbar-end">
                                        <div className="w-24 rounded-full">
                                            <img className='image-full rounded-full' src={user?.photoURL} title={user?.displayName} />
                                        </div>
                                    </div>
                                </li>
                                <li className='font-extrabold'><button onClick={handleLogOut}><ActiveLink>Logout</ActiveLink></button></li>
                            </div>
                        }
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default Header;