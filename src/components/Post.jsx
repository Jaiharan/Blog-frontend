import { formatISO9075 } from 'date-fns';
import React from 'react'

const Post = ({title,summary, cover,content,createdAt}) => {
  return (
    <div className="post ">
      <div className='post-style ml-36'>
        <div className="image "><img src="https://techcrunch.com/wp-content/uploads/2023/11/GPT-Store.jpg?w=730&crop=1" alt="" className='h-64' /></div>        
        <div className="texts">
        <h2 className='no-underline text-inherit font-bold text-3xl '>{title}</h2>
        <p className='info'>
          <a className='author pr-4'>Dawid</a>
          <time className=' text-neutral-600'>{formatISO9075(new Date(createdAt))}</time>
        </p>
        <p>{summary}</p>
      </div>
    </div>
    
  </div>
  )
}

export default Post