import { useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { IoMoonOutline } from "react-icons/io5";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "prefers-color-scheme: dark",
    ).matches;
    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <>
      <button className="cursor-pointer">
        {theme === "dark" ? (
          <CiLight
            className="text-white p-0.5 size-8.5 border border-gray-500 rounded-full"
            onClick={() => setTheme("light")}
          />
        ) : (
          <IoMoonOutline
            className="size-8.5  pl-1 p-0.5 border border-gray-500 rounded-full"
            onClick={() => setTheme("dark")}
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggleBtn;
