import React,{useState} from 'react'
import { Link } from 'react-router-dom';
const baseURL = import.meta.env.VITE_BASE_URL

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const register = async (e) =>{
    e.preventDefault();
    const response = await fetch(`${baseURL}/register`,{
      method:"POST",
      body: JSON.stringify({ username, password }),
      headers:{"Content-Type":"application/json"},
    })
    if (response.status === 200) {
      alert("Register Successful!")
    }
    else{
      alert("Register Failed!!!")
    }
  }

  return (
    <>
      <div className="hero min-h-[90vh]" >
        <div className="hero-content flex-col lg:flex-row rounded-lg border bg-base-200 ">
          <img src="https://i.pinimg.com/564x/79/e2/f9/79e2f97ac666f80fd62f3729256cd911.jpg" 
            className="max-w-md rounded-lg shadow-2xl" />
          <div > 
            <h1 className='text-center text-4xl font-bold py-4 mx-4'>Create your account</h1>
            <div className="card card-body justify-center items-center py-4 ">
              <div className="mx-auto w-full max-w-sm">
                <form className="space-y-3" >
                  <div>
                    <label htmlFor="username" className="block text-sm  leading-6 text-gray-900">Username</label>
                    <input name="username" type="text" onChange={(e)=> setUsername(e.target.value)}
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
                <Link className="btn btn-warning mx-1.5 w-32 hover:bg-yellow-500 hover:text-base-100 normal-case" onClick={register}>Sign Up</Link>
                <Link className="btn btn-error mx-1.5 w-32 hover:bg-rose-600 hover:text-base-100 normal-case" >Cancel</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage