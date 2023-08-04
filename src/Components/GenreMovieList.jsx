// eslint-disable-next-line no-unused-vars
import React from 'react'
import GenresList from '../Constant/GenresList'
import MovieList from './MovieList'

function GenreMovieList() {
 
  return (
    <div>

     {GenresList.genere.map((genere,index)=> index<=4&&(
      <div key={index} className='p-8 px-8 md:px-16'>
        <h2 className='text-white text-[20px] font-bold'>{genere.name} </h2>
        <MovieList genresid={genere.id} indexid={index}/>
      </div>
     ))}

    </div>
  )
}

export default GenreMovieList
