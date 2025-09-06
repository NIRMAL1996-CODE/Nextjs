import React from 'react'

const User =async ({params}:{params: {user:string}}) => {
  const {user}= await params;
  console.log(user)
  return (
    <div className='m-[10px] p-[10px]'>
      <h1 className='text-6xl font-bold'>User {user}</h1>
      <p className='text-3xl font-semibold'>Hi, Im {user}</p>
    </div>
  )
}

export default User;