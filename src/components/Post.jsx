import React from 'react'

const Post = () => {
  return (
    <div className="post post-style">
    <div className="image"><img src="https://techcrunch.com/wp-content/uploads/2023/11/GPT-Store.jpg?w=730&crop=1" alt="" className='h-64 pl-48' /></div>        
    <div className="texts">
      <h2 className='no-underline text-inherit font-bold text-3xl '>OpenAI’s GPT Store delayed to 2024 following leadership chaos</h2>
      <p className='info'>
        <a className='author'>Dawid</a>
        <time>2023-01-06 16:45</time>
      </p>
      <p>OpenAI’s app store for AI, the GPT Store, will not launch this year as previously announced, but rather on an unspecified date in early 2024, the company said. The delay is almost certainly due to the leadership shakeup that occurred in November, just after the initial announcement.</p>
    </div>
  </div>
  )
}

export default Post