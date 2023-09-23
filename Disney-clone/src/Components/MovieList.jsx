import React from 'react'
import GlobalApi from '../Services/GlobalApi'
import { useState,useEffect,useRef } from 'react'
import MovieCard from './MovieCard'
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

const MovieList = ({genreId,index}) => {
    const [movieList,setMovieList]=useState([])
    const elementRef=useRef(null);
    useEffect(()=>{
        getMovieId();
    },[])
    const getMovieId=()=>{
        GlobalApi.getMovieId(genreId).then(resp=>{
            // console.log(resp.data.results)
            setMovieList(resp.data.results)
        })
    }

    const slideRight=(element)=>{
        element.scrollLeft+=500;
    }
    const slideLeft=(element)=>{
        element.scrollLeft-=500;
    }
  return (
    <div className='relative'>
         <IoChevronBackOutline onClick={()=>slideLeft(elementRef.current)} 
         className={`text-[50px] text-white
           p-2 z-10 cursor-pointer 
            hidden md:block absolute
            ${index%3==0?'mt-[80px]':'mt-[150px]'} `}/>
   
    <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-hide scroll-smooth pt-4 px-3 pb-4'>
        {movieList.map((item,index)=>(
           <>
          {index%3==0?<HrMovieCard movie={item}/>:<MovieCard movie={item} />}
           </> 
        ))}
    </div>
    <IoChevronForwardOutline onClick={()=>slideRight(elementRef.current)}
           className={`text-[50px] text-white hidden md:block
           p-2 cursor-pointer z-10 top-0
            absolute right-0 
            ${index%3==0?'mt-[80px]':'mt-[150px]'}`}/> 
    </div>
  )
}

export default MovieList
