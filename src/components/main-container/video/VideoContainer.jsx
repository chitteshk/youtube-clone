import React, { useEffect,useState } from "react";
import { YOUTUBE_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";


const VideoContainer = () => {
  useEffect(() => {
    getVideos();
  }, []);

  const [videoList, setVideoList] = useState([]);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API);
    const videoObject = await data.json();
    setVideoList(videoObject.items);
  };
return (
 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
  {videoList.map((video) => (
    <VideoCard key={video.id} video={video} />
  ))}
</div>
)
};

export default VideoContainer;
