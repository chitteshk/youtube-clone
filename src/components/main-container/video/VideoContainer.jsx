import React, { useEffect, useState } from "react";
import { YOUTUBE_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videoList, setVideoList] = useState([]);
  const [loading,setLoading] = useState(false);

  const getVideos = async () => {
    setLoading(true);
    const data = await fetch(YOUTUBE_API);
    const videoObject = await data.json();
    setVideoList(videoObject.items);
  };
return (
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 auto-rows-auto justify-items-center">
  {videoList.map((video) => (
    <VideoCard key={video.id} video={video} />
  ))}
</div>
)
};

export default VideoContainer;
