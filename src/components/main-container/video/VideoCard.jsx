import React from "react";

const VideoCard = ({ video, variant }) => {
  const handleViewsFormat = (views) => {
    if (views >= 1_000_000_000) {
      return (views / 1_000_000_000).toFixed(1).replace(/\.0$/, "") + "B views";
    }
    if (views >= 1_000_000) {
      return (views / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M views";
    }
    if (views >= 1_000) {
      return (views / 1_000).toFixed(1).replace(/\.0$/, "") + "K views";
    }
  };

  const getTimeAgo = (publishedTime) => {
    const publishedAt = new Date(publishedTime);
    const now = new Date();
    const diffMs = now - publishedAt;
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

    if (diffDays < 1) {
      const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
      if (diffHours < 1) {
        const diffMin = Math.floor(diffMs / (1000 * 60));
        return `${diffMin} minute${diffMin !== 1 ? "s" : ""} ago`; // to make it plural week / weeks
      }
      return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
    }
    if (diffDays < 7) {
      return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
    }

    if (diffDays < 30) {
      const diffWeek = Math.floor(diffDays / 7);
      return `${diffWeek} week${diffWeek !== 1 ? "s" : ""} ago`;
    }

    if (diffDays < 365) {
      const diffMonth = Math.floor(diffDays / 30);
      return `${diffMonth} month${diffMonth !== 1 ? "s" : ""} ago`;
    }

    const diffYears = Math.floor(diffDays / 365);
    return `${diffYears} year${diffYears !== 1 ? "s" : ""} ago`;
  };

  if(variant === 'horzontal') {
    return (
      <div className="w-full max-w-500px flex flex-row">
         <div className="w-full aspect-video rounded-lg overflow-hidden">
        <img
          src={
            video?.snippet?.thumbnails?.maxres?.url ||
            video?.snippet?.thumbnails?.medium?.url
          }
          alt={video?.snippet?.channelTitle}
          className="w-full h-full object-cover"
        />
        </div>
      </div>
    )
  }

  return (
    <div className="w-full max-w-[360px] flex flex-col">
      <div className="w-full aspect-video rounded-lg overflow-hidden">
        <img
          src={
            video?.snippet?.thumbnails?.maxres?.url ||
            video?.snippet?.thumbnails?.medium?.url
          }
          alt={video?.snippet?.channelTitle}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mt-2 flex-1 flex flex-col justify-between">
        <div className="title font-semibold text-base line-clamp-2 leading-tight">{video?.snippet?.title}</div>
        <div className="channelName text-sm text-gray-600 mt-1">{video?.snippet?.channelTitle}</div>
        <div className="flex items-center text-xs text-gray-500 mt-1 space-x-2">
          <span>{video?.statistics?.viewCount ? handleViewsFormat(video?.statistics?.viewCount) : ""}</span>
          <span>•</span>
          <span>{video?.snippet?.publishedAt ? getTimeAgo(video.snippet.publishedAt) : ""}</span>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
