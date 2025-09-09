
import React from 'react'

const Project = async ({params}: {params: {all:string[]}}) => {
  const {all} =await params;
  console.log("--------", {all})
  return (
    <div>
      <h1>Project {all}</h1>
      All Routes{""}
       {all.map((p)=>(
        <li key={p}>{p}</li>
       
      ))}
      
    </div>
  )
}
export default Project;