import React from "react";
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="  px-4 sm:px-12  mt-20 sm:mt-40
   lg:px-24 xl:px-40 pt-10 sm:pt-20 bg-slate-50 dark:bg-gray-900"
    >
      {/* footer top */}
      <div className="flex justify-between lg:items-center max-lg:flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-5 text-sm text-gray-700 dark:text-gray-400"
        >
          <a href="#">
            {" "}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl dark:text-white">
              Adhm<span className="text-xl sm:text-2xl">.</span>
              <span className="text-[#9B00FE]">ai</span>
            </h2>
          </a>
          <p className="max-w-md">
            From strategy to execution, we craft digital solution that move your
            business forward.
          </p>
          <ul className="flex gap-8">
            <li>
              <a className="hover:text-primary transition" href="#hero">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition" href="#services">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition" href="#our-work">
                Our Work
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition" href="#contact-us">
                Contact Us
              </a>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-gray-600 dark:text-gray-400"
        >
          <h3 className="font-semibold">Subscribe to our newsletter</h3>
          <p className="text-sm mt-2 mb-6">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="flex gap-2 text-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 text-sm outline-none rounded 
              dark:text-gray-200 bg-transparent border border-gray-300 dark:border-gray-500"
            />
            <button className="bg-primary text-white rounded px-6">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>

      <hr className="border-gray-300 dark:border-gray-600 my-6" />
      {/* footer bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="pb-6 text-sm text-gray-500 flex justify-center sm:justify-between gap-4 flex-wrap"
      >
        <p>Adhm.ai 2026 © Adhm - All right reserved </p>
        <div className="flex items-center justify-between gap-4">
          <a
            href="https://www.facebook.com/adhm.k.aobeid/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook className="fill-[#1877F2] text-lg" />
          </a>
          <a
            href="https://www.instagram.com/adhmaobeid/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IoLogoInstagram className="fill-[#C13584] text-lg" />
          </a>
          <a
            href="https://www.linkedin.com/in/%D8%A7%D8%AF%D9%87%D9%85-%D8%B9%D8%A8%D9%8A%D8%AF-a8027b41b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="fill-[#0077B5] text-lg" />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube className="fill-[#FF0000] text-lg" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Footer;
