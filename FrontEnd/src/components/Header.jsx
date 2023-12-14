import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'
const baseURL = import.meta.env.VITE_BASE_URL

const Header = () => {
    const { setUserInfo, userInfo } = useContext(UserContext);
    const username = userInfo?.username;
    const logout = () =>{
        fetch(`${baseURL}/logout`,{
            credentials:"include",
            method:"POST",
        })
        setUserInfo(null);
    }
    return (

        <header className="navbar bg-base-200">
            <div className='nav mx-auto'>
                <Link to={"/"} className='btn btn-ghost text-xl mx-auto hover:bg-transparent hover:text-primary'>
                    SENPRU Blog
                </Link>
            </div>
            <nav className='navbar-end mx-auto'>
                {username && (
                    <>
                        <Link to={"/create"} className='btn btn-ghost'>Create new post</Link>
                        <a onClick={"/logout"} className='btn btn-ghost'>Logout</a>
                    </>
                )}
                {!username && (
                    <>
                        <Link to={"/login"} className='btn btn-ghost'>Login</Link>
                        <Link to={"/register"} className='btn btn-ghost'>Register</Link>
                    </>
                )}
            </nav>
        </header>
    )
}

export default Header