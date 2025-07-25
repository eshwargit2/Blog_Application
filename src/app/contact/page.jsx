"use client"

import React from 'react'
import { useState } from 'react'
import { setTimeout } from 'timers';

const page = () => {


  const [inputs, setInputs]=useState("");
  const [messsge, setMessage]=useState("");


  const handleInput=(e)=>{
           setInputs((state)=> {return {...state,[e.target.name]:e.target.value}})
  }

  const handleSubmit=(e)=>{
        e.preventDefault();
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/enquary`,{
        method:'POST',
        body:JSON.stringify(inputs)
      })
      .then((res)=>res.json())
      .then((res)=>{
          setMessage(res.message);
          setInputs({})
          setTimeout(()=>{
            setMessage("")
          },3000)
      })

  }


  return (
    <div>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
            <div className="flex items-center mb-4">
                <label htmlFor="name" className="w-1/4">Name:</label>
                <input type="text" id="name" name='name' onChange={handleInput} value={inputs.name??""} className="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div className="flex items-center mb-4">
                <label htmlFor="email" className="w-1/4">Email:</label>
                <input type="email" id="email" name='email'  onChange={handleInput} value={inputs.email??""}  className="border rounded px-2 py-1 w-3/4"/>
            </div>
            <div className="flex items-center mb-4">
                <label htmlFor="message" className="w-1/4">Message:</label>
                <textarea id="message" name='message'  onChange={handleInput} value={inputs.message??""}  className="border rounded px-2 py-1 w-3/4" rows="4"></textarea>
            </div>
            <button type='submit' className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">Submit</button>
        </form>
       {messsge &&  <p>{messsge}</p>  }
    </main>
    </div>
  )
}

export default page