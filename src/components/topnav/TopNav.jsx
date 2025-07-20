import React, {useContext} from "react";
import { Bars3Icon, MagnifyingGlassIcon , UserCircleIcon } from "@heroicons/react/16/solid";
import YoutubeLogo from "../../assets/svg/youtube-logo.svg";
import { BodyContext } from "../../context/BodyContext";

const TopNav = () => {

  const { toggleSideNav } = useContext(BodyContext);
  return (
    <div className="bg-white shadow-md p-4 flex justify-between items-center">
      <div className="flex row gap-2">
        <Bars3Icon className="h-6 w-6 text-gray-700 cursor-pointer hover:bg-gray-100" onClick={toggleSideNav}/>
        <div>
          <img src={YoutubeLogo} alt="YouTube Logo" className="h-6" />
        </div>
      </div>
      <div className="flex items-center gap-2 w-1/2">
        <input className= "border border-gray-300 w-full rounded-full p-2" type="text"/>
        <MagnifyingGlassIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
      </div>
      <div className="flex items-center">
        <UserCircleIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
      </div>
    </div>
  );
};

export default TopNav;
