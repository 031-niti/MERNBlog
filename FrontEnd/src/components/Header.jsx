import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../context/UserContext'

const Header = () => {
    return (
        <header className="navbar bg-base-200">
            <div className='nav mx-auto'>
                <Link to={"/"} className='btn btn-ghost text-xl mx-auto hover:bg-transparent hover:text-primary'>
                    SENPRU Blog
                </Link>
            </div>
            <nav className='navbar-end mx-auto'>
                <Link to={"/login"} className='btn btn-ghost'>Login</Link>
                <Link to={"/register"} className='btn btn-ghost'>Register</Link>
            </nav>
        </header>
    )
}

export default Header