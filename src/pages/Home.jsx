import React from 'react'
import Main from '../components/Main'
import Row from '../components/Row'
import requests from '../requests'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
  return (
    <>
      <Main />
      <Row rowId='1' title='Top Rated' fetchUrl={requests.requestTopRated} />
      <Row rowId='2' title='Trending' fetchUrl={requests.requestTrending} />
      <Row rowId='3' title='Upcoming' fetchUrl={requests.requestUpcoming} />
      <Row rowId='4' title='Horror' fetchUrl={requests.requestHorror} />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  )
}

export default Home
