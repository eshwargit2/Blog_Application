"use client"

import React, { useEffect, useState } from 'react'

const page = ({params}) => {

  const id =params.id;

  const [post, setPost ]=useState(null)

  useEffect(()=>{
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/post/`+id)
        .then((res)=>res.json())
        .then((res)=>setPost(res))  
  },[]);



  return (
    <div>
        {post &&
           <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            <p className="text-gray-500">Published on January 1, 2022</p>
            <img src={post.image} alt="Post Image" className="my-4"/>
            <p>{post.description}</p>
          </main>
      }
    </div>
  )
}

export default page