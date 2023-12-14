import React, { useState ,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../context/UserContext'
const baseURL = import.meta.env.VITE_BASE_URL

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirest, setRedirest] = useState(false);
  const { setUserInfo } = useContext(UserContext);
  const login = async (e) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/login`, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
      credentials:"include",
    });

    if (response.ok) {
      alert("Login Successful!");
      response.json().then((userInfo)=>{
        setUserInfo(userInfo);
        setRedirest(true);
      })
    }
    else {
      alert("wrong credentials!")
    }
  }
  if (redirest) {
    return <Navigator to={"/"} />;
  }
  return (
    <>
      <div className="hero min-h-[90vh]">
        <div className="hero-content flex-col lg:flex-row rounded-lg border bg-base-200">
          <img src="https://i.pinimg.com/564x/f0/e7/00/f0e700b818e5bcfc35d46b652febd7a9.jpg" 
          className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className='text-4xl text-center font-bold p-4'>Login to your account</h1>
            <div className="card card-body justify-center items-center py-4 ">
              <div className="mx-auto w-full max-w-sm">
                <form className="space-y-3 ">
                  <div>
                    <label htmlFor="username" className="block text-sm leading-6 text-gray-900">Username</label>
                    <input name="username" type="text" onChange={(e) => setUsername(e.target.value)}
                    className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-2 ring-inset ring-base-300 focus:border-none"/>
                  </div>
                  <div>
                    <label htmlFor="password" className="block text-sm leading-6 text-gray-900">Password</label>
                    <input name="password" type="password" onChange={(e) => setPassword(e.target.value)}
                      className="block w-full rounded-lg border-0 p-2 text-gray-900 shadow-sm ring-2 ring-inset ring-base-300 focus:border-none "/>
                  </div>
                </form>
              </div>
              <div className='join justify-center items-center mt-4'>
                <Link className="btn btn-warning mx-1.5 w-32 hover:bg-yellow-500 hover:text-base-100 normal-case" onClick={login}>Log in</Link>
                <Link className="btn btn-error mx-1.5 w-32 hover:bg-rose-600 hover:text-base-100 normal-case" >Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoginPage