// "use client" is called a directive (or pragma) in Next.js.
'use client';

// import useRouter: useRouter → hook → lets you control client-side navigation.
// next/navigation → for app directory (new router, modern features).
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

const Home = () => {

  // const router = useRouter(); → creates the router object.
  // Gives you methods to navigate programmatically: push(), replace(), back(), forward(), refresh(), prefetch().
  // Must be used inside a client component ("use client").
  const router =useRouter();
  // console.log(router);

  // page is the parameter, must be a string (TypeScript).
  // Uses the router object from useRouter().
  // .push() → navigates to the URL provided.
  // `${page}` → template string, converts page parameter to string path.
  // page is just a parameter name.its just a name it can be anything.
  // When you call navigate("/dashboard"), page becomes the URL string "/dashboard".
  const navigate=(page: string)=>{
     router.push(`${page}`)
    // router.replace(`${page}`)  // Replace: go to page + replace current history
    // router.back()              // Back: go back one page
    // router.forward()           // Forward: go forward one page
    // router.refresh()           // Refresh: reload current page
    // router.prefetch(`${page}`) // Prefetch: preload page in background
  }
  
  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1 className='text-4xl font-bold bg-gray-200 m-[10px] p-[10px] rounded-xl'>Welcome</h1>
      <p className='text-2xl bg-gray-200 m-[10px] p-[10px] rounded-xl'>Welcome to my Next.js App 🎉</p>
      <Link className='bg-blue-400 m-[10px] p-[10px] text-xl font-semibold rounded-xl cursor-pointer hover:bg-amber-200' href="/dashboard">Go To Dashboard</Link>

      <button className='bg-pink-200 m-[10px] p-[10px] text-xl font-semibold rounded-xl cursor-pointer hover:bg-amber-200'
      // function call with argument → triggers programmatic navigation.
      onClick={()=>{navigate("/dashboard/products")}}>Go To LoginPage</button>
    </div>
  )
}

export default Home