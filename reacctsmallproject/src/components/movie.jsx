import React, { useState } from 'react'

const Movie = () => {
  const movies = [
  { id: 1, title: "Inception", year: 2010 },
  { id: 2, title: "Interstellar", year: 2014 },
  { id: 3, title: "Tenet", year: 2020 }
];
const [button, setbutton]= useState(false);
const handleButton=()=>{
setbutton(!button)
}
  return (
    <div>
        <button onClick={handleButton}>Show Movie</button>
      <h1>MoviesList</h1>
      {button && <ul>
        {movies.map((movie)=>(
         <li key={movie.id}>{movie.title}-{movie.year}</li>
        ))}
      </ul>}
    
    </div>
  )
}

export default Movie