import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
const baseURL = import.meta.env.VITE_BASE_URL

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;
    const logout = () => {
        fetch(`${baseURL}/logout`, {
            credentials: "include",
            method: "POST",
        })
        setUserInfo(null);
    }
    return (
        <header>
            <nav className='bg-base-200 p-2'>
                <div className="container mx-auto flex justify-between items-center bg-base-200">
                    <div className="navbar-start">
                        <Link className="btn btn-ghost text-black hover:bg-transparent hover:text-blue-500 text-2xl "
                            aria-current="page" to="/">
                            SENPRU Blog
                        </Link>
                    </div>
                    <div className="navbar-end flex w-[26rem] ">
                        <div className="tabs mr-4 ">
                            {username && (
                                <Link className="btn btn-ghost text-lg"
                                    aria-current="page" to="/create">
                                    Create new post
                                </Link>
                            )}
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className=" btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full ">
                                    <svg className='stroke-black'
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                            </label>
                            <ul
                                tabIndex={0}
                                className="mt-2 z-[1] p-2 shadow menu menu-sm dropdown-content backdrop-invert bg-white/80 backdrop-opacity-40 rounded-box w-52"
                            >
                                {username && (
                                    <span className="badge border-none backdrop-invert bg-white/50 backdrop-opacity-10 myt-1 mb-2">
                                        <p className='text-[1rem] font-semibold text-black'>Welcome, {username}</p>
                                    </span>
                                )}
                                {!username && (
                                    <li>
                                        <Link className='text-black' aria-current="page" 
                                        to="/register">Register</Link>
                                    </li>
                                )}
                                {!username && (
                                    <li>
                                        <Link className='text-black' aria-current="page" 
                                        to="/login">Login</Link>
                                    </li>
                                )}
                                {username && (
                                    <li>
                                        <Link className='text-black ' aria-current="page" 
                                        onClick={logout}>Logout</Link>
                                    </li>
                                )}
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Header