import React, { useState } from 'react';
import Edtitor from '../components/Edtitor';
const baseURL = import.meta.env.VITE_BASE_URL;
import { Navigate } from 'react-router-dom';

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);

  const createPost = async (e) => {
    const data = new FormData(); 
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("file", file[0]);
    e.preventDefault();
    const response = await fetch(`${baseURL}/post`, {
      method: "POST",
      body: data,
      credentials: "include",
    });
    if (response.ok) {
      setRedirect(true);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className='my-8'>
      <form className='container mx-auto flex flex-col items-center space-y-4'>
        <input className="input input-bordered w-full max-w-md" type="text" name='title'
          onChange={(e) => setTitle(e.target.value)} placeholder='title' />
        <input className="input input-bordered w-full max-w-md" type="text" name='summary'
          onChange={(e) => setSummary(e.target.value)} placeholder='summary' />
        <input className="file-input file-input-bordered  w-full max-w-md" type="file" name='file'
          onChange={(e) => setFile(e.target.files)} id='file' />
        <Edtitor value={content} onChange={setContent} />
        <button className='btn btn-primary text-white w-full max-w-md' onClick={createPost}>Create post</button>
      </form>
    </div>
  );
};

export default CreatePage;
