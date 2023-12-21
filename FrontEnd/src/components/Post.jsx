import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({ title, summary, file  }) => {
    
    return (
        <div className='post container mx-auto flex my-8 odd:flex-row-reverse '>
            <div className='image w-3/4 mr-4 odd:ml-1'>
                <Link>
                    <img src={file}
                        alt=""/>
                </Link>
            </div>
            <div className='texts'>
                <Link>
                    <h2 className='text-lg font-semibold'>
                        {title}
                    </h2>
                </Link>
                <p className='info'>
                    <a href="" className='author'>Niti</a>
                    <time className='ml-1'>12 December 2023 </time>
                </p>
                <p className='summary'>
                    {summary}
                </p>
            </div>
        </div>
    )
}

export default Post