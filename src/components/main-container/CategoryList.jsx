import React from "react";
const CategoryList = () => {
  const list = [
    "All",
    "AI",
    "Podcasts",
    "Gaming",
    "Mutual Funds",
    "Music",
    "Movies",
    "Sports",
    "News",
    "Education",
    "Technology",
    "Travel",
    "Comedy",
    "Science",
    "Fashion",
    "Food",
    "Live",
    "Shorts",
    "Documentary",
  ];
  return (
      <div className="flex flex-row max-w-screen-2xl py-2 gap-3 px-2 overflow-x-auto">
        {list.map((item) => (
          <button
            key={item}
            className="p-2 bg-white text-gray-700 text-sm font-semibold rounded-2xl shadow border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {item}
          </button>
        ))}
      </div>
  );
};

export default CategoryList;
