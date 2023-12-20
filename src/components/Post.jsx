import { formatISO9075 } from 'date-fns';
import React from 'react'
import { Link } from 'react-router-dom';


const Post = ({_id,title,summary, cover,content,createdAt,author}) => {
  return (
    <div className="post ">
      <div className='post-style md:grid-cols-1 sm:grid-cols-1 ml-2'>
        <div className="image flex justify-center">
          <Link to={`/post/${_id}`}>
            <img src={"http://localhost:3000/"+cover} alt="" className='h-64 rounded-md shadow-lg hover:scale-105 transition-all' />
          </Link>
        </div>        
        <div className="texts ">
          <Link to={`/post/${_id}`}>
            <h2 className='no-underline text-inherit font-bold text-4xl pb-2 hover:underline transition-all sm:text-2xl'>{title}</h2>
          </Link>
          <p className='info pb-2'>
            <a className='author font-semibold pr-4 text-white'>{author.username}</a>
            <time className=' text-neutral-400 font-semibold'>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className=' sm:text-base'>{summary}</p>
        </div>
    </div>
    
  </div>
  )
}

export default Post