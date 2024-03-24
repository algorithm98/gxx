"use client"
import React, { useState } from 'react'

export default function AdminLogin() {

    const [authState, setAuthState] = useState({
        email:"",
        password:""
    })
    const handleSubmit = (event:React.FormEvent) => {
        event.preventDefault();
        console.log("The Auth State is", authState);
    };

  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className='w-[500px] shadow-md rounded-lg p-5'>
        <h1 className="text-2xl font-bold">Admin Login</h1>
        <p>Welcome back</p>
        <form onSubmit={handleSubmit}>
        <div className='mt-5'>
            <label className="block">Email</label>
            <input type="text" placeholder="Enter your email" className="w-full outline-red-300 p-2 h-10 rounded-md" 
            onChange= {(e) => setAuthState({...authState , email:e.target.value})} 
            />
        </div>
        <div className='mt-5'>
            <label className="block">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full outline-red-300 p-2 h-10 rounded-md" 
            onChange= {(e) => setAuthState({...authState , password:e.target.value})} 
            />
        </div>
        <div className="mt-5">
        <button type="submit" className="w-full bg-red-400 rounded-lg p-2 text-white">
            Submit
        </button>
        </div>
        </form>
      </div>
    </div>
  );
}
