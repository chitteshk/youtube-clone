import React from "react";
import {
  HomeIcon,
  ArrowTrendingUpIcon,
  FilmIcon,
  PuzzlePieceIcon,
  TvIcon,
  VideoCameraIcon,
} from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

const SideNav = ({ isSideNavOpen }) => {
  return (
    <div
      className={`bg-white shadow-md p-4 ${isSideNavOpen ? "w-64" : "w-45"}`}
    >
      <div className="flex flex-col">
        <Link className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full">
          <HomeIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Home</span>}
        </Link>
        <Link
          to="/"
          className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full"
        >
          <TvIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Shorts</span>}
        </Link>
        <Link className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full">
          <VideoCameraIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Subscription</span>}
        </Link>
        <div className="flex justify-center mt-2">
          <span className="w-full h-0 border border-gray-300"></span>
        </div>
        <div className={`px-4 py-2 font-bold ${isSideNavOpen ? "mt-4" : 'mt-0' }`}>{isSideNavOpen? 'Explore' : ''}</div>
        <Link
          to="/trending"
          className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full"
        >
          <ArrowTrendingUpIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Trending</span>}
        </Link>

        <Link className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full">
          <FilmIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Movies</span>}
        </Link>
        <Link className="flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full">
          <PuzzlePieceIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Gaming</span>}
        </Link>
      </div>
    </div>
  );
};

export default SideNav;
