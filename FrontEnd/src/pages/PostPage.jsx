import React from 'react'

const PostPage = () => {
  return (
    <div className='post-page container mx-auto my-4 flex flex-col items-center'>
      <h1 className='text-4xl font-bold'>
        A letter from Anthony and Hooi Ling
      </h1>
      <time className='text-lg mt-3 text-gray-400'>12 December 2023 </time>
      <div className="author font-bold mb-3 ">
        By Niti.S
      </div>
      <div className='image w-2/3 mr-4 odd:ml-1 '>
        <img src="https://images.unsplash.com/photo-1695653422543-7da6d6744364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="" />
      </div>
      <div className='texts mt-4'>
        <p className='content '>
          This case study and BBOP made us realise that businesses can create double bottom lines-i.e.
          deliver profits and social impact at the same time-and sparked a dream of building a company that would be a
          force for good for Southeast Asia, the place we call home.
        </p>
      </div>
    </div>
  )
}

export default PostPage