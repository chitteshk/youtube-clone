import React,{useContext} from "react";
import TopNav from "./topnav/TopNav";
import SideNav from "./sidenav/SideNav";
import { Outlet } from "react-router-dom";
import { BodyContext } from "../context/BodyContext";

const Body = () => {
  const {isSideNavOpen} = useContext(BodyContext);
  return (
    <div className="flex flex-col h-screen">
      <TopNav />
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
