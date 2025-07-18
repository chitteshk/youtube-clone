import React from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./video/VideoContainer";

const MainContainer = () => {
  return (
<div className="main flex flex-col w-full h-screen">
  <div className="category-filter p-4 flex">
    <CategoryList />
  </div>
  <div className="video-container flex-1 flex flex-row flex-wrap p-4 w-full overflow-y-auto">
    <VideoContainer />
  </div>
</div>
  );
};

export default MainContainer;
