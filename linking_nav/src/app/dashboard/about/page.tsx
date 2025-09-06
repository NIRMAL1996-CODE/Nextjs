import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col h-screen justify-center items-center  '>
      <h1 className=' bg-gray-200 m-[10px] p-[10px] text-2xl font-semibold rounded-xl cursor-pointer'>About</h1>
       <Link href="/dashboard" className='bg-gray-200 m-[10px] p-[10px] text-xl font-semibold rounded-xl cursor-pointer'>
      go back
      </Link> 
    </div>
  )
}

export default About