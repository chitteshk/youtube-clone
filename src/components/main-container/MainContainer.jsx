import React, { useEffect } from 'react'
import CategoryList from './CategoryList'
import { YOUTUBE_API } from '../../utils/constants';

const MainContainer = () => {

  useEffect(() => {
    getVideos();
  },[]);


  const getVideos = async() => {
      const data = await fetch(YOUTUBE_API);
      const videoObject = await data.json();
      console.log(videoObject);
  }

  return (
    <div className='main flex w-full'>
      <div className='category-filter p-4'>
        <CategoryList/>
      </div>
    </div>
  )
}

export default MainContainer
