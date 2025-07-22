import React, { useEffect, useState, useRef } from "react";
import VideoCard from "./video/VideoCard";
import { useSearchParams, Link } from "react-router-dom";
import { YOUTUBE_SEARCH_API } from "../../utils/constants";

const ResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const containerRef = useRef(null);
  const loadingRef = useRef(false);
  const [nextPageToken, setNextPageToken] = useState("");

  useEffect(() => {
    const query = searchParams.get("search_query") || "";
    setSearchQuery(query);
    if (query) {
      fetchResults(query);
    }
  }, [searchParams]);

  useEffect(() => {
    const handleResponsiveLoading = () => {
      if (!containerRef.current) return;
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
      if (
        scrollTop + clientHeight >= scrollHeight - 500 &&
        !loadingRef.current &&
        nextPageToken
      ) {
        fetchResults(searchQuery, nextPageToken);
      }
    };

    const refCurrent = containerRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("scroll", handleResponsiveLoading);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("scroll", handleResponsiveLoading);
      }
    };
  }, [nextPageToken, searchQuery]);

  const fetchResults = async (query, pageToken) => {
    setLoading(true);
    loadingRef.current = true;
    try {
      const response = await fetch(
        `${YOUTUBE_SEARCH_API}&q=${encodeURIComponent(query)}&pageToken=${
          pageToken || ""
        }`
      );
      const data = await response.json();
      console.log(data);
      setNextPageToken(data?.nextPageToken);

      setResults((prev) => {
        const allVideos = [...prev, ...data.items];
        const seen = new Set();
        const uniqueResults = allVideos.filter((video) => {
          if (seen.has(video?.id?.videoId)) return false;
          seen.add(video?.id?.videoId);
          return true;
        });
        return uniqueResults;
      });
    } catch (err) {
      console.error("Error fetching results:", err);
    }
    setLoading(false);
    loadingRef.current = false;
  };

  return (
    <>
      <div
        ref={containerRef}
        className="flex flex-col justify-between items-center p-2 m-4 gap-2"
        style={{ height: "90vh", overflowY: "auto" }}
      >
        {results.map((result) => (
          <Link
            key={result?.id?.videoId}
            to={`/watch?v=${result?.id?.videoId}`}
          >
            <VideoCard video={result} variant="horizonal"/>
          </Link>
        ))}
      </div>
      {loading && (
        <div className="w-full text-center py-4 text-gray-500">Loading...</div>
      )}
    </>
  );
};

export default ResultsPage;
