import Link from 'next/link'
import React from 'react'

const Dashboard = () => {
  return (
    <div>
      <nav>
        <ul className='bg-yellow-200 flex flex-row space-x-40 m-10px p-[20px] text-2xl font-semibold items-center justify-center cursor-pointer'>
       <li> <Link href="/">Home</Link></li>
       <li> <Link href="/dashboard/about">About</Link></li>
       <li> <Link href="/dashboard/products">Product</Link></li>
       <li> <Link href="/dashboard/cart">Cart</Link></li>
       <li> <Link href="/dashboard/messages">Message</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Dashboard