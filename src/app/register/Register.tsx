'use client'

import React, { useState } from 'react';
import userRegister from '@/libs/userRegister';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await userRegister(name, email, password, role);
      // Optionally, you can handle successful registration here, e.g., show a success message.
    } catch (error) {
      console.error('Failed to register:', error);
      // Optionally, you can handle registration failure here, e.g., show an error message.
    }
  };

  return (
    <div className='justify-center items-center h-[500px] w-[400px] mt-[200px] p-9 border rounded-lg mx-auto shadow-md shadow-white hover:shadow-2xl hover:shadow-white'>
      <h2 className='text-white text-4xl font-sans text-left'>Register</h2>
      <form onSubmit={handleSubmit} className='mt-7 text-left'>
        <label className='text-white text-lg font-sans mb-7'>
          FullName
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full name"
            required
            className='w-[100%] border-1 rounded-md p-[8px] mt-3 text-[16px] mb-5 text-slate-600'
          />
        </label>
        
        <br />
        <label className='text-white text-lg font-sans mb-7'>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
            className='w-[100%] border-1 rounded-md p-[8px] text-[16px] mt-3 mb-5 text-slate-600'
          />
        </label>
        <br />
        <label className='text-white text-lg font-sans mb-7'>
          Password
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
            className='w-[100%] border-1 rounded-md p-[8px] text-[16px] mt-3 mb-5 text-slate-600'
          />
        </label>
        <br />
        <button type="submit" className='text-white text-xl font-sans border px-5 py-3 rounded-md hover:bg-cyan-950 hover:shadow-lg hover:shadow-white'>Register</button>
      </form>
    </div>
  );
}
