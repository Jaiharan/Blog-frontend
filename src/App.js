import './App.css';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <main className='p-6 m-0 '>
      <header className='flex justify-between mb-12 '>
        <a href="" className='Logo no-underline text-inherit font-bold text-3xl'>MyBlog</a>
        <nav className='flex gap-4'>
          <a href="" className='hover:font-bold transition-all'>Login</a>
          <a href="" className='hover:font-bold transition-all'>Register</a>
        </nav>
      </header>
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
      <div className="post post-style">
        <div className="image"><img src="https://techcrunch.com/wp-content/uploads/2023/11/GPT-Store.jpg?w=730&crop=1" alt="" className='h-64 pl-48' /></div>        
        <div className="texts">
          <h2 className='post-headline'>OpenAI’s GPT Store delayed to 2024 following leadership chaos</h2>
          <p>OpenAI’s app store for AI, the GPT Store, will not launch this year as previously announced, but rather on an unspecified date in early 2024, the company said. The delay is almost certainly due to the leadership shakeup that occurred in November, just after the initial announcement.</p>
        </div>
      </div>
      <div className="post post-style">
        <div className="image"><img src="https://techcrunch.com/wp-content/uploads/2023/11/GPT-Store.jpg?w=730&crop=1" alt="" className='h-64 pl-48' /></div>        
        <div className="texts">
          <h2 className='post-headline'>OpenAI’s GPT Store delayed to 2024 following leadership chaos</h2>
          <p>OpenAI’s app store for AI, the GPT Store, will not launch this year as previously announced, but rather on an unspecified date in early 2024, the company said. The delay is almost certainly due to the leadership shakeup that occurred in November, just after the initial announcement.</p>
        </div>
      </div>
      
    </main>
  );
}

export default App;
