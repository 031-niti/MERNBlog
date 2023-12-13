import React from 'react'
import Edtitor from '../components/Edtitor'

const CreatePage = () => {
  return (
    <div className='my-8'>
      <form className='container mx-auto flex flex-col items-center space-y-4'>
        <input className="input input-bordered w-full max-w-md" type="text" name='title' placeholder='title' />
        <input className="input input-bordered w-full max-w-md" type="text" name='summary' placeholder='summary' />
        <input className="file-input file-input-bordered  w-full max-w-md" type="file" name='file' id='file' />
        <Edtitor />
        <button className='btn btn-primary text-white w-full max-w-md'>Create post</button>
      </form>
    </div>
  )
}

export default CreatePage