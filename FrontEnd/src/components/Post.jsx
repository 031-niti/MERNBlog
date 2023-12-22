import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';

const Post = ({post}) => {
    return (
        <div className='post container mx-auto flex my-8 odd:flex-row-reverse bg-base-200 rounded-lg '>
            <div className='image w-3/4 '>
                <Link>
                    <img src={post.cover} className='rounded-lg odd:ml-2 even:mr-2'
                        alt=""/>
                </Link>
            </div>
            <div className='texts w-3/4 p-4'>
                <Link>
                    <h2 className='text-lg font-semibold'>
                        {post.title}
                    </h2>
                </Link>
                <p className='info flex flex-col'>
                    <a href="" className='author'>{post.author}</a>
                    <time className='text-sm font-semibold'>
                        {format(new Date(post.createdAt), 'dd MMMM yyyy HH:mm')}
                    </time>
                </p>
                <p className='summary'>
                    {post.summary}
                </p>
            </div>
        </div>
    )
}

export default Post