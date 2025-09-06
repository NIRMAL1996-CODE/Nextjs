import React from 'react'
 import Link from 'next/link'

const Cart = () => {
  return (
     <div className='flex justify-center items-center flex-col h-screen '>
      <h1 className=' bg-gray-200 m-[10px] p-[10px] text-2xl font-semibold rounded-xl cursor-pointer'>Cart</h1>
      <Link href="/dashboard" className='bg-gray-200 m-[10px] p-[10px] text-xl font-semibold rounded-xl cursor-pointer'>
      go back
      </Link>

    </div>
  )
}

export default Cart