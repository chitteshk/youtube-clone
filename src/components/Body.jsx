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
    <>
      <TopNav toggleSideNav={toggleSideNav} />
      <div className="flex gap-2 min-h-screen min-w-fit">
        <SideNav isSideNavOpen={isSideNavOpen} />
        <Outlet />
      </div>
    </>
  );
};

export default Body;
