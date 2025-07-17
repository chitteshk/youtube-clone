import React, { useState } from "react";
import TopNav from "./topnav/TopNav";
import SideNav from "./sidenav/SideNav";
import MainContainer from "./main-container/MainContainer";

const Body = () => {
  const [isSideNavOpen, setIsSideNavOpen] = useState(
    localStorage.getItem("sideNavOpen") === "true"
  );
  const toggleSideNav = () => {
    setIsSideNavOpen((prev) => {
      const newValue = !prev;
      localStorage.setItem("sideNavOpen", newValue);
      return newValue;
    });
  };
  return (
    <div>
      <TopNav toggleSideNav={toggleSideNav} />
      <div className="flex gap-2 min-h-screen w-full flex-grow">
        <SideNav isSideNavOpen={isSideNavOpen} />
        <MainContainer />
      </div>
    </div>
  );
};

export default Body;
