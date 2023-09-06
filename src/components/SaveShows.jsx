import React, { useEffect, useState } from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import CloseIcon from '@mui/icons-material/Close';
import { onSnapshot, updateDoc, doc } from 'firebase/firestore'
import { db } from '../firebase'
import { useAuthContext } from '../context/authenticate';

const SaveShows = () => {

    const [movies, setMovies] = useState([])
    const { user } = useAuthContext()

    useEffect(() => {
        onSnapshot(doc(db, 'users', user?.email), (doc) => {
            setMovies(doc?.data()?.saveShows)
        })
    }, [user?.email])

    const handleDelete = async (passId) => {
        try {
            const result = movies.filter((item) => item?.id !== passId)
            await updateDoc(doc(db, 'users', user?.email), {
                saveShows: result
            })
        } catch (e) {
            alert(e)
        }

    }

    const slideLeft = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500
    }

    const slideRight = () => {
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='flex items-center relative group'>
                <ArrowLeftIcon size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block left-0'
                    onClick={slideLeft} />
                <div id={'slider'} className='w-full h-full overflow-x-scroll scroll-smooth whitespace-nowrap scrollbar-hide no-scrollbar relative'>
                    {
                        movies.map((item) => {
                            return (
                                <div key={item.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                    <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.image}`} alt={item?.title} />
                                    <div className='absolute w-full h-full top-0 left-0 text-white opacity-0 hover:opacity-100 hover:bg-black/80'>
                                        <p className='flex items-center justify-center h-full text-center text-xs font-bold md:text-sm whitespace-normal'>{item?.title}</p>

                                        <p onClick={()=>handleDelete(item?.id)} className='absolute text-gray-300 top-4 right-4'>
                                            <CloseIcon />
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <ArrowRightIcon size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0'
                    onClick={slideRight} />
            </div>
        </>
    )
}

export default SaveShows
