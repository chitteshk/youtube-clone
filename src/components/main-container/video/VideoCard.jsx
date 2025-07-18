import React from "react";

const VideoCard = ({ video }) => {
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

  return (
    <div className="flex flex-col p-3 rounded-lg mt-2 mb-4">
      <div className="overflow-hidden rounded-lg h-full">
        <img
          src={
            video?.snippet?.thumbnails?.maxres?.url ||
            video?.snippet?.thumbnails?.medium?.url
          }
          alt={video?.snippet?.channelTitle}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="description mt-2 flex-1 flex flex-col justify-between">
        <div className="title font-semibold text-base line-clamp-2">
          {video?.snippet?.title}
        </div>
        <div className="channelName text-sm text-gray-600 mt-1">
          {video?.snippet?.channelTitle}
        </div>
        <div className="views text-xs text-gray-500 mt-1">
          {video?.statistics?.viewCount
            ? handleViewsFormat(video?.statistics?.viewCount)
            : ""}
        </div>
        <div className="uploaded-since text-xs text-gray-400 mt-1">
          {video?.snippet?.publishedAt
            ? getTimeAgo(video.snippet.publishedAt)
            : ""}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
