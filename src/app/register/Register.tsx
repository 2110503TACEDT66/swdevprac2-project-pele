'use client'

import React, { useState } from 'react';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user'); // Default role is 'user'

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3500/api/v1/auth/register', {
        method: 'POST',
        mode : "no-cors",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({"name" : name, "email" : email, "password" : password, "role" : role }),
      });
  
      if (response.ok) {
        // Registration successful
        console.log('User registered successfully');
      } else {
        // Registration failed
        console.error('Registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <div className='border rounded-lg mx-[40vw] mt-[35vh] p-10'>
      <h2 className='text-white text-4xl font-sans '>Register</h2>
      <form onSubmit={handleSubmit} className=''>
        <label className='text-white text-xl font-sans'>
          FullName
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className='text-black'
          />
        </label>
        <br />
        <label className='text-white text-xl font-sans'>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className='text-black'
          />
        </label>
        <br />
        <label className='text-white text-xl font-sans'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className='text-black'
          />
        </label>
        <br />
      </form>
      <button type="submit" className='text-white text-xl font-sans' onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default RegisterForm;
