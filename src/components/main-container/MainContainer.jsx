import React from "react";
import CategoryList from "./CategoryList";
import VideoContainer from "./video/VideoContainer";

const MainContainer = () => {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-none">
        <CategoryList />
      </div>
      <div className="flex-1 overflow-y-auto min-w-0 p-4">
        <VideoContainer />
      </div>
    </div>
  );
};

export default MainContainer;
