// eslint-disable-next-line no-unused-vars
import React,{useEffect, useRef, useState} from 'react'
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"
import GlobalApi from '../Services/GlobalApi'
const IMAGE_BASE_URL=" https://image.tmdb.org/t/p/original"
const screenWidth=window.innerWidth
function Slider() {
  const[MovieList,setMovieList]=useState([])

  const elementRef=useRef()

    useEffect(() => {
     getTrendingMovies()
    }, [])

    const getTrendingMovies=()=>{
        GlobalApi.getTrendingVideos.then(resp=>
            {
                
                setMovieList(resp.data.results)
            })

           
    }
     const sliderRight=(element)=>{
              element.scrollLeft+=screenWidth-110
            }
            const sliderleft=(element)=>{
              element.scrollLeft-=screenWidth-110
            }
  return (
    <div>
      
      <HiChevronLeft className='hidden md:block text-white text-[30px]
       absolute mx-8 mt-[150px] cursor-pointer' onClick={()=>sliderleft(elementRef.current)}/>
      <HiChevronRight className='hidden md:block text-white text-[30px] 
      absolute mx-8 mt-[150px] cursor-pointer right-0' onClick={()=>sliderRight(elementRef.current)}/>

    <div className='flex overflow-x-auto w-full px-16 py-4 scrollbar-none' ref={elementRef}>
     {MovieList.map((item,index)=>(
      <img key={index} src={IMAGE_BASE_URL+item.backdrop_path} alt="ListImages" className='min-w-full 
      md:h-[310px]  object-cover object-left-top mr-5 hover:border-[4px] border-e-gray-400 
      transition-all duration-100 ease-in-out' />
     ))}
    </div>

    </div>
  )
}

export default Slider
