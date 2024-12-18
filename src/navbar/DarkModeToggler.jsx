// import { Icon } from "@iconify/react";
// import { useSelector, useDispatch } from "react-redux";
// import { toggleTheme } from "../slices/ThemeSlice";

// const DarkModeToggler = () => {
//   const darkMode = useSelector((state) => state.darkMode.isDarkMode);
//   const dispatch = useDispatch();

//   const toggleModeHandler = () => {
//     dispatch(toggleTheme());
//   };

//   return (
//     <div>
//       <Icon
//         onClick={toggleModeHandler}
//         icon={darkMode ? "circum:dark" : "iconamoon:mode-light"}
//         className={`${darkMode?'dark:text-white':'text-black'} text-3xl cursor-pointer`}
//       />
//     </div>
//   );
// };

// export default DarkModeToggler;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/ThemeSlice";
import { Icon } from "@iconify/react";

const DarkModeToggler = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const toggleModeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <button
      onClick={toggleModeHandler}
      className={`relative flex items-center h-9 w-20 px-2 rounded-full border-2 transition-colors duration-300 overflow-visible ${
        darkMode ? " border-gray-700" : " border-gray-400"
      }`}
    >
      {/* Light Mode Icon */}
      <div
        className={`absolute left-1 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          darkMode ? "opacity-0" : "opacity-100"
        }`}
      >
        <Icon
          icon="iconamoon:mode-light"
          className="text-yellow-600 text-xl z-10"
        />
      </div>

      {/* Dark Mode Icon */}
      <div
        className={`absolute right-2 top-1/2 transform -translate-y-1/2 transition-opacity duration-300 ${
          darkMode ? "opacity-100" : "opacity-0"
        }`}
      >
        <Icon
          icon="circum:dark"
          className="text-blue-500 text-xl z-10"
        />
      </div>

      {/* Toggle Circle */}
      <span
        className={`absolute top-0.4 left-0.5 h-7 w-7 rounded-full bg-white shadow-md transform opacity-50 transition-transform z-0 duration-300 ${
          darkMode ? "translate-x-11" : "translate-x-0"
        }`}
      />
    </button>
  );
};

export default DarkModeToggler;


