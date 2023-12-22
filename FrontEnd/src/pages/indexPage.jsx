import { useState, useEffect } from 'react'
import Post from '../components/Post'
const baseURL = import.meta.env.VITE_BASE_URL

const indexPage = () => {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const response = await fetch(`${baseURL}/post`, {
          method: "GET",
        });
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllPosts();
  }, []);
  return (
    <div >
      {posts.map(post => (
        <Post key={post._id} post={post} />
      ))}
    </div>
  )
}
export default indexPage