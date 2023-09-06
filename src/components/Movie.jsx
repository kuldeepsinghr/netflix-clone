import React, { useState } from 'react'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuthContext } from '../context/authenticate';
import {
  updateDoc,
  doc,
  arrayUnion
} from 'firebase/firestore'
import { db } from '../firebase';

const Movie = ({ item }) => {
  const [like, setLike] = useState(false)
  const { user } = useAuthContext()

  const saveShow = async () => {
    if (user?.email) {
      setLike(!like)
      try {
        await updateDoc(doc(db, 'users', user?.email), {
          saveShows: (arrayUnion({
            id: item?.id,
            title: item?.title,
            image: item?.backdrop_path
          }))
        })
        toast.success('Saved successfully', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      } catch (e) {
        console.log(e)
      }
    }else{
      toast.error('Please SignIn', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  }

  return (
    <>
      <div className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`} alt={item?.title} />
        <div className='absolute w-full h-full top-0 left-0 text-white opacity-0 hover:opacity-100 hover:bg-black/80'>
          <p className='flex items-center justify-center h-full text-center text-xs font-bold md:text-sm whitespace-normal'>{item?.title}</p>

          <p onClick={saveShow}>
            {like ? <FavoriteIcon className='absolute top-4 left-4 text-gray-300' /> :
              <FavoriteBorderIcon className='absolute top-4 left-4 text-gray-300' />}
          </p>
        </div>
      </div>
    </>
  )
}

export default Movie
