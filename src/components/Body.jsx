import React, { useState } from "react";
import TopNav from "./topnav/TopNav";
import SideNav from "./sidenav/SideNav";
import { Outlet } from "react-router-dom";

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
    <div className="flex flex-col h-screen">
      <TopNav toggleSideNav={toggleSideNav} />
      <div className="flex flex-1 overflow-hidden">
        <SideNav isSideNavOpen={isSideNavOpen} />
        <div className="flex-1 min-w-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Body;
