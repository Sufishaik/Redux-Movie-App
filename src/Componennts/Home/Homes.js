import React, { useEffect } from 'react'
import MovieList from "../MovieListing/MovieList"
// import axios from "axios";
import MovieApi from '../Apis/MovieApi';
import { useDispatch} from 'react-redux';

function Homes() {
  const ApiKey = "cad23ee4";
  const movieTest = "harry";
  const showTest = "Friends";

  const dispatch = useDispatch();
  useEffect(() => {
     const fetchData = async () => {
       const resp = await MovieApi.get(`?apikey=${ApiKey}&s=${movieTest}&type=movie`)
       .catch((err) => {
        console.log("Err ", err)
       })
       console.log("The resp from api is ", resp.data.Search)
       dispatch({type : 'SETDATA', payload : resp.data.Search})
     }
    
     const fetchShow = async () => {
       const resp = await MovieApi.get(`?apikey=${ApiKey}&s=${showTest}&type=series`)
       .catch((err) => {
        console.log("Err ", err)
       })
       console.log("The resp from api show is ", resp.data.Search)
       dispatch({type : 'SETDATATWO', payload : resp.data.Search})
     }
   
     fetchData()
     fetchShow()
  }, [])
  return (
    <>
     <div className='banner-img'></div>
     <MovieList />
    </>
  )
}

export default Homes
