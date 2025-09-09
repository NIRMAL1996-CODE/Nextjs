import React from 'react'

const UserProfile = ({params} : {params: {id:string}}) => {
  const {id} =params;
  return (
    <div>
      <h1>UserProfile : {id}</h1>
    </div>
  )
}

export default UserProfile