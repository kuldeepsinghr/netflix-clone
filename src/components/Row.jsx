import React, { useEffect, useState } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import axios from 'axios';
import Movie from './Movie';
// import 'react-toastify/dist/ReactToastify.css';

const Row = ({title, rowId, fetchUrl}) => {
    const [movies, setMovies] = useState([])

    const slideLeft = ()=>{
        const slide = document.getElementById('slider'+rowId)
        slide.scrollLeft = slide.scrollLeft - 500
    }

    const slideRight = ()=>{
        const slide = document.getElementById('slider'+rowId)
        slide.scrollLeft = slide.scrollLeft + 500
    }

    useEffect(()=>{
        try{
            axios.get(fetchUrl)
            .then((response)=>setMovies(response.data.results))
        }catch(e){
            alert(e)
        }
    },[])


  return (
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
      <div className='flex items-center relative group'>
        <ArrowLeftIcon size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
        onClick={slideLeft}
        />
        <div id={'slider'+rowId} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide no-scrollbar relative'>
            {
                movies.map((item)=>{
                    return (
                        <Movie item={item} key={item.id}/>
                    )
                })
            }
            
        </div>
        <ArrowRightIcon size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'
        onClick={slideRight}
        />
        {/* <ToastContainer/> */}
      </div>
    </>
  )
}

export default Row
