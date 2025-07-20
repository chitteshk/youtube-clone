import React, { useContext, useEffect } from "react";
import { BodyContext } from "../../context/BodyContext";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const { setSideNav } = useContext(BodyContext);
  const [searchParams] = useSearchParams();


  useEffect(() => {
    setSideNav(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // if you populate this dependency array then while on watch page you will never be able to toggle as use Effect will be always called to close the sideNav :))
  const videoId = searchParams.get('v');
  return (
    <div>
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${videoId}?si=Mk28UYkKycVKpvfU`}
        title={`YouTube video player - ${videoId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
