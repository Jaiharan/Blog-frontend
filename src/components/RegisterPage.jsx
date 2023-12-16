import React, { useState } from 'react'

const RegisterPage = () => {

  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');

  async function register(e){
    e.preventDefault();
    const response = await fetch('http://localhost:3000/register', {
      method: 'POST',
      body: JSON.stringify({username,password}),
      headers: {'Content-Type': 'application/json'}
    });
    if(response.status !== 200){
      alert('Registration Failed')
    }else{
      alert('Registration Successfull')
    }
    
  }

  return (
    <form className="register " onSubmit={register}>
      <h1>Register</h1>
      <input type="text" 
              placeholder='username' 
              value={username} 
              onChange={(e) => setUsername(e.target.value)}
              required
              />
      <input type="password"
              placeholder='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              />
      <button>Register</button>
    </form>
  )
}

export default RegisterPage