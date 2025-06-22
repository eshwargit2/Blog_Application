import React from 'react'
import Link from 'next/link'

const header = () => {
  return (
    <div>
          <header className="bg-white shadow-lg">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center ">
            <Link href="/" className="text-3xl text-black font-bold">Blog</Link>
            <nav className="space-x-4">
                <Link href="/" className="text-blue-500 font-bold ">Home</Link>
                <Link href="/about" className="text-blue-500 font-bold">About</Link>
                <Link href="/contact" className="text-blue-500 font-bold">Contact</Link>
            </nav>
        </div>
    </header>
    </div>
  )
}

export default header