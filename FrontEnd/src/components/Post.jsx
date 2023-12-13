import React from 'react'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className='post container mx-auto flex my-8 odd:flex-row-reverse '>
            <div className='image w-3/4 mr-4 odd:ml-1'>
                <Link>
                    <img src="https://images.unsplash.com/photo-1695653422543-7da6d6744364?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""/>
                </Link>
            </div>
            <div className='texts '>
                <Link>
                    <h2 className='text-lg font-semibold'>
                        A letter from Anthony and Hooi Ling
                    </h2>
                </Link>
                <p className='info'>
                    <a href="" className='author'>Niti</a>
                    <time className='ml-1'>12 December 2023 </time>
                </p>
                <p className='summary'>
                    This case study and BBOP made us realise that businesses can create double bottom lines-i.e. 
                    deliver profits and social impact at the same time-and sparked a dream of building a company that would be a 
                    force for good for Southeast Asia, the place we call home.
                </p>
            </div>
        </div>
    )
}

export default Post