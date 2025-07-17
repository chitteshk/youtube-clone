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
    <div className="py-2 w-full">
      <div className="flex flex-row flex-wrap gap-3 px-2">
        {list.map((item) => (
          <button
            key={item}
            className="px-5 py-2 bg-white text-gray-700 font-semibold rounded-3xl shadow border border-gray-200 hover:bg-blue-500 hover:text-white transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
