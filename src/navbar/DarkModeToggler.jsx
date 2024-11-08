import { Icon } from "@iconify/react";
import { useSelector, useDispatch } from "react-redux";
import { toggleTheme } from "../slices/ThemeSlice";

const DarkModeToggler = () => {
  const darkMode = useSelector((state) => state.darkMode.isDarkMode);
  const dispatch = useDispatch();

  const toggleModeHandler = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Icon
        onClick={toggleModeHandler}
        icon={darkMode ? "circum:dark" : "iconamoon:mode-light"}
        className={`${darkMode?'dark:text-white':'text-black'} text-3xl cursor-pointer`}
      />
    </div>
  );
};

export default DarkModeToggler;
