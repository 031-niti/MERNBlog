import { useState, useEffect, useContext } from 'react';
import { UserContext } from '../context/UserContext';
import { useParams, Link, Navigate } from 'react-router-dom';
import { format } from 'date-fns';

const baseURL = import.meta.env.VITE_BASE_URL;

const PostPage = () => {
  const { userInfo } = useContext(UserContext);
  const [postInfo, setPostInfo] = useState({});
  const [redirect, setRedirect] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${baseURL}/post/${id}`).then((response) => {
      response.json().then((postInfo) => {
        setPostInfo(postInfo);
      });
    });
  }, [id]);

  const formattedDate =
    postInfo.createdAt && !isNaN(new Date(postInfo.createdAt).getTime())
      ? format(new Date(postInfo.createdAt), 'dd MMMM yyyy HH:mm')
      : 'Invalid Date';

  if (!postInfo) return '';

  const deletePost = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/post/${id}`, {
        method: 'DELETE',
        credentials: 'include',
      });
      if (response.ok) {
        alert("Post ID " + id + " is Delete Successfully");
        setRedirect(true);
      } else {
        alert('Failed to delete post');
      }
    } catch (error) {
      alert('An error occurred during deletion', error);
    }
  };
  if (redirect) {
    return <Navigate to={"/"} />;
  }

  return (
    <div className='post-page container mx-auto my-4 flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>{postInfo.title}</h1>
      <time className='text-lg mt-3 text-gray-400'>{formattedDate}</time>
      <div className='author font-semibold mb-3 capitalize'>
        By @{postInfo.author?.username}
      </div>
      {userInfo?.id === postInfo.author?._id && (
        <div className='space-x-4'>
          <Link to={`/edit/${postInfo._id}`} className='btn btn-warning w-36 text-lg capitalize mb-3'>
            edit
          </Link>
          <Link className='btn btn-error w-36 text-lg capitalize mb-3'onClick={deletePost}>
            Delete
          </Link>
        </div>
      )}
      <div className='image w-2/3 mr-4 odd:ml-1 '>
        <img src={`${baseURL}/${postInfo.cover}`} alt='' />
      </div>
      <div className='texts mt-4'>
        <p className='content'>{postInfo.content}</p>
      </div>
    </div>
  );
};

export default PostPage;
