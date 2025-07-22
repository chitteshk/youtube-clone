import React, { useContext, useState } from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  UserCircleIcon,
} from "@heroicons/react/16/solid";
import YoutubeLogo from "../../assets/svg/youtube-logo.svg";
import { BodyContext } from "../../context/BodyContext";
import { Link, useNavigate } from "react-router-dom";

const TopNav = () => {
  const { toggleSideNav } = useContext(BodyContext);
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      navigate(`/results?search_query=${inputValue}`);
    }
  };

  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex row gap-2">
        <Bars3Icon
          className="h-6 w-6 text-gray-700 cursor-pointer hover:bg-gray-100"
          onClick={toggleSideNav}
        />
        <div>
          <img src={YoutubeLogo} alt="YouTube Logo" className="h-6" />
        </div>
      </div>
      <div className="flex items-center gap-2 w-1/2">
        <input
          onChange={handleInputChange}
          value={inputValue}
          onKeyDown={handleKeyDown}
          className="border border-gray-300 w-full rounded-full p-2"
          type="text"
        />
        <Link to={`/results?search_query=${inputValue}`}>
          <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
        </Link>
      </div>
      <div className="flex items-center">
        <UserCircleIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNav;
