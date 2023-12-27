import { useState, useEffect} from 'react'
import { useParams, Link, Navigate } from 'react-router-dom';
import Edtitor from '../components/Edtitor'
const baseURL = import.meta.env.VITE_BASE_URL

const EditPage = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [file, setFile] = useState("");
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setTitle(postInfo.title);
        setSummary(postInfo.summary);
        setContent(postInfo.content);
      });
    });
    fetch();
  }, [id]);

  const updatePost = async (e) =>{
    e.preventDefault();
    const data = new FormData();
    data.set('id', id);
    data.set('title', title);
    data.set('summary', summary);
    data.set('content', content);
    if (file?.[0]) {
      data.set('file', file[0]);
    }
    const response = await fetch(`${baseURL}/post`, {
      method: 'PUT',
      body: data,
      credentials: 'include',
    });
    if (response.ok) {
      setRedirect(true);
    }
  }
  if (redirect) {
    return <Navigate to={"/"} />;
  }
  return (
    <div className='my-8'>
      <form className='container mx-auto flex flex-col items-center space-y-4 '>
        <input className="input input-bordered w-full max-w-md" type="text" name='title' placeholder='title' value={title} 
          onChange={(e) => setTitle(e.target.value)}/>
        <input className="input input-bordered w-full max-w-md" type="text" name='summary' placeholder='summary' value={summary} 
          onChange={(e) => setSummary(e.target.value)}/>
        <input className="file-input file-input-bordered file-input-warning w-full max-w-md" type="file" name='file' id='file' onChange={(e) => setFile(e.target.files)} />
        <Edtitor value={content} onChange={setContent} />
        <button className='btn btn-warning w-full max-w-md' onClick={updatePost}>Edit post</button>
      </form>
    </div>
  )
}

export default EditPage