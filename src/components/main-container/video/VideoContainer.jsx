import React, { useEffect, useState, useRef } from "react";
import { YOUTUBE_API } from "../../../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageToken, setNextPageToken] = useState(null);
  const containerRef = useRef(null);
  const loadingRef = useRef(false); // using this because of async nature of react , it was causing a race condition with loading state updation which in that small window was calling multiple api calls when scroll condition was met.

  useEffect(() => {
    getVideos();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (
        scrollTop + clientHeight >= scrollHeight - 500 &&
        !loadingRef.current &&
        nextPageToken
      ) {
        getVideos(nextPageToken);
      }
    };
    const refCurrent = containerRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleScroll);
      }
    };
  }, [nextPageToken]);

  const getVideos = async (pageToken) => {
    setLoading(true);
    loadingRef.current = true;
    const url = YOUTUBE_API + (pageToken ? "&pageToken=" + pageToken : "");
    const data = await fetch(url);
    const videoObject = await data.json();
    setNextPageToken(videoObject.nextPageToken);
    setVideoList((prev) => {
      const allVideos = [...prev, ...videoObject.items];
      const seen = new Set();
      const uniqueVideos = allVideos.filter((video) => {
        if (seen.has(video.id)) return false;
        seen.add(video.id);
        return true;
      });
      return uniqueVideos; // to filter out duplicat video id's, for some weird reason multiple api calls produce same videos which gives error in react as key does not stay unique ( id ) 😫
    });
    setLoading(false);
    loadingRef.current = false;
  };
  return (
    <>
      <div
        ref={containerRef}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 auto-rows-auto justify-items-center"
        style={{ height: "80vh", overflowY: "auto" }}
      >
        {videoList.map((video) => (
          <>
            <Link to={`/watch?v=${video.id}`}>
              <VideoCard key={video.id} video={video} />
            </Link>
          </>
        ))}
      </div>
      {loading && (
        <div className="w-full text-center py-4 text-gray-500">Loading...</div>
      )}
    </>
  );
};

export default VideoContainer;
