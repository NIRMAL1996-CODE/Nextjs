import Link from 'next/link'
import React from 'react'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold bg-gray-200 m-[10px] p-[10px] rounded-xl'>Welcome</h1>
      <p className='text-2xl bg-gray-200 m-[10px] p-[10px] rounded-xl'>Welcome to my Next.js App 🎉</p>
      <Link className='bg-blue-500 m-[10px] p-[10px] text-xl font-semibold rounded-xl cursor-pointer hover:bg-amber-200' href="/dashboard">Go To Dashboard</Link>
    </div>
  )
}

export default Home