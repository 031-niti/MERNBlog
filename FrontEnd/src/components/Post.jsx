import React from 'react'
import { Link } from 'react-router-dom'
import { format } from 'date-fns';
const baseURL = import.meta.env.VITE_BASE_URL

const Post = ({ _id, title, createdAt, author, cover, summary }) => {
    return (
        <div className='post container mx-auto flex my-8 odd:flex-row-reverse rounded-lg bg-base-200 overflow-hidden'>
            <div className='image w-3/4 '>
                <Link to={`/post/${_id}`}>
                    <img src={`${baseURL}/${cover}`} className=''
                        alt=""/>
                </Link>
            </div>
            <div className='texts w-3/4 p-4'>
                <Link to={`/post/${_id}`}>
                    <h2 className='text-lg font-semibold'>
                        {title}
                    </h2>
                </Link>
                <p className='info flex flex-col'>
                    <a href="" className='author capitalize font-semibold '>{author.username}</a>
                    <time className='text-sm font-semibold'>
                        {format(new Date(createdAt), 'dd MMMM yyyy HH:mm')}
                    </time>
                </p>
                <p className='summary'>
                    {summary}
                </p>
            </div>
        </div>
    )
}

export default Post