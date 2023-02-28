import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Category = () => {
  const api_key = '319eb105ec3eb40ee1474035dacfe0ce';
  const common_url = 'https://api.themoviedb.org/3';
  const img_url = 'https://image.tmdb.org/t/p/original'
  const upcoming = 'upcoming';
  const popular = 'popular';
  const top_rated = 'top_rated';
  const now_playing = 'now_playing';

  const [upcomingMovie, setupcomingMovie] = useState([]);
  const [popularMovie, setpopularMovie] = useState([]);
  const [top_ratedMovie, settop_ratedMovie] = useState([]);
  const [now_playingMovie, setnow_playingMovie] = useState([]);

  useEffect(() => {
    const fetch_data = async () => {
      const { data: { results } } = await axios.get(`${common_url}/movie/${upcoming}?api_key=${api_key}`);
      setupcomingMovie(results);
    };

    fetch_data();
  }, [])


  useEffect(() => {
    const fetch_data = async () => {
      const { data: { results } } = await axios.get(`${common_url}/movie/${popular}?api_key=${api_key}`);
      setpopularMovie(results);
    };

    fetch_data();
  }, [])



  useEffect(() => {
    const fetch_data = async () => {
      const { data: { results } } = await axios.get(`${common_url}/movie/${top_rated}?api_key=${api_key}`);
      settop_ratedMovie(results);
    };

    fetch_data();
  }, [])



  useEffect(() => {
    const fetch_data = async () => {
      const { data: { results } } = await axios.get(`${common_url}/movie/${now_playing}?api_key=${api_key}`);
      setnow_playingMovie(results);
    };

    fetch_data();
  }, [])


  return (
    <>
      <div className='category'>
        {upcomingMovie.map((data) => {
          return (
            <div className="category_card">
              <a href="#"><img src={`${img_url}/${data.poster_path}`} alt="logo" /></a>
            </div>
          )
        })}
      </div>

      <div className='category'>
        {popularMovie.map((data) => {
          return (
            <div className="category_card">
              <a href="#"><img src={`${img_url}/${data.poster_path}`} alt="logo" /></a>
            </div>
          )
        })}
      </div>


      <div className='category'>
        {top_ratedMovie.map((data) => {
          return (
            <div className="category_card">
              <a href="#"><img src={`${img_url}/${data.poster_path}`} alt="logo" /></a>
            </div>
          )
        })}
      </div>

      <div className='category'>
        {now_playingMovie.map((data) => {
          return (
            <div className="category_card">
              <a href="#"><img src={`${img_url}/${data.poster_path}`} alt="logo" /></a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Category