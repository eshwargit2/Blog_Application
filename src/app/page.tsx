"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Home() {


 const [post, setPost] = useState([])
const inputRef = useRef("");
const [search, setSearch]=useState(false);

 useEffect(()=>{
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/posts`)
      .then((res)=>res.json())
      .then((res)=>setPost(res))
 },[])

 const searchPost=(e)=>{

  if(e.type=='keydown' && e.key !=='Enter' ){
    return;
  }
        setSearch(true);
        fetch(`${process.env.NEXT_PUBLIC_BACKEND_API}/posts?q=${inputRef.current.value}`)
         .then((res)=>res.json())
          .then((res)=>setPost(res))
          .finally(()=>{
            setSearch(false)
          })
 }

  return (
    <div >
     <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </main> 
     <div className="flex justify-end px-4">
        <input onKeyDown={searchPost} ref={inputRef} type="text" disabled={search} className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4" onClick={searchPost} disabled={search} >{search?"...":"Search"}</button>
      </div> 
        <div className="grid grid-cols-1 mt-3 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       {post.map((post)=>(
      <Link href={"/post/"+post._id} >  
       <div className="border border-gray-200 p-4">
          <img className="w-full h-48 object-cover mb-4" src={post.image} alt="Post Image"/>
          <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
          <p className="text-gray-600">{post.description}</p>
        </div> 
        </Link>
         ))
       }
      {!post.length>0 && inputRef.current.value && <p>No post Available for thiw quary <b>{inputRef.current.value}</b> </p>}
    </div>
    </div>
  );
}
