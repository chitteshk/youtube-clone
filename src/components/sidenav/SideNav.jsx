import React from 'react'
import { HomeIcon, ArrowTrendingUpIcon, FilmIcon, PuzzlePieceIcon } from '@heroicons/react/16/solid'

const SideNav = ({ isSideNavOpen }) => {
  return (
    <div className={`bg-white shadow-md p-4 ${isSideNavOpen ? 'w-64' : 'w-45'}`}>
      <div className='flex flex-col'>
        <button className='flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full'>
          <HomeIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Home</span>}
        </button>
        <button className='flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full'>
          <ArrowTrendingUpIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Trending</span>}
        </button>
        <button className='flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full'>
          <FilmIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Movies</span>}
        </button>
        <button className='flex flex-row gap-2 py-2 px-4 hover:bg-gray-100 items-center w-full'>
          <PuzzlePieceIcon className="h-6 w-6 text-gray-700 cursor-pointer" />
          {isSideNavOpen && <span>Gaming</span>}
        </button>
      </div>
    </div>
  )
}

export default SideNav