/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useEffect } from 'react'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';


function MovieList({genresid,indexid}) {

    const[moviesList,setMoviesList]=useState([])
    
    const elementRef=useRef(null)
    useEffect(()=>{
        getMovieByGenreId()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const getMovieByGenreId=()=>{    

        GlobalApi.getMovieByGenreId(genresid).then(resp=>{
           
        //    console.log(resp.data.results);
            setMoviesList(resp.data.results)        
        })
    }

        const slideRight=(element)=>{
            element.scrollLeft+=500;
        }
        const slideLeft=(element)=>{
            element.scrollLeft-=500;
        }
    
  return (
    <div key={indexid} className='relative'>

        <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${indexid%3==0?'mt-[80px]':'mt-[150px]'} `}/>

        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth
         pt-5 px-3 pb-5 '>
        {moviesList.map((movie)=>
        (
            <>
              {indexid%3==0?<HrMovieCard movie={movie}/>:<MovieCard movie={movie}/>}
             
              </>
        ))}
    </div>
     
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${indexid%3==0?'mt-[80px]':'mt-[150px]'}`}/> 

    </div>
  )
}

export default MovieList