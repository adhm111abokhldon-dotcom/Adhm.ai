import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { RiCloseLargeFill } from "react-icons/ri";
import { MdMenu } from "react-icons/md";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { motion } from "motion/react";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4
     sticky top-0 z-20 font-medium backdrop-blur-xl bg-white/50 dark:bg-gray-900/70"
    >
      <div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl dark:text-white">
          Adhm<span className="text-xl sm:text-2xl">.</span>
          <span className="text-[#9B00FE]">ai</span>
        </h2>
      </div>
      <div
        className={`text-gray-700 dark:text-white sm:text-sm ${sidebarOpen ? "max-sm:w-60 max-sm:pl-10" : "max-sm:w-0 overflow-hidden"}
       max-sm:fixed top-0 bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col
        max-sm:bg-primary max-sm:text-white max-sm:pt-20 flex sm:items-center
        gap-5 transition-all`}
      >
        <RiCloseLargeFill
          className="w-5 h-auto absolute right-4 top-4 sm:hidden cursor-pointer"
          onClick={() => {
            setSidebarOpen(false);
          }}
        />
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          href="#"
          className="sm:hover:border-b"
        >
          Home
        </a>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          href="#services"
          className="sm:hover:border-b"
        >
          Services
        </a>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          href="#our-work"
          className="sm:hover:border-b"
        >
          Our Work
        </a>
        <a
          onClick={() => {
            setSidebarOpen(false);
          }}
          href="#contact-us"
          className="sm:hover:border-b"
        >
          Contact Us
        </a>
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <ThemeToggleBtn
          
          theme={theme}
          setTheme={setTheme}
        />

        <MdMenu
          className="sm:hidden dark:text-[#9B00FE] cursor-pointer w-8 h-auto"
          onClick={() => {
            setSidebarOpen(true);
          }}
        />
        <a
          href="#contact-us"
          className="text-sm max-sm:hidden flex items-center gap-2  bg-primary
         text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all"
        >
          Connect <FaArrowRight className="h-auto w-3" />
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
