import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import logo from "../../assets/logo1.png";

function Navbar() {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav class=" overflow-hidden   bg-gradient-to-r from-gray-900 to-gray-700">
      <div class="max-w-screen-full  px-14 h-[4rem] relative flex flex-nowrap items-center justify-between mx-auto p-4">
        <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src={logo}
            class="w-[220px] mt-[-0.3rem] ml-[-2rem]"
            alt="Flowbite Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          class=" p-2  w-10 h-10 text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
          onClick={() => toggleExpansion((prev) => !prev)}
        >
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul class="font-medium flex flex-col  p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
            {["home", "tools", "about", "contact"].map((item, index) => (
              <li>
                <Link
                  to={`${item}`}
                  class="block py-2 px-3 capitalize text-[1.2rem] text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {isExpanded && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 w-[80%] px-14 z-40  md:hidden  bottom-0 right-0  bg-[#111827]  "
          >
            <IoClose
              className="text-white text-[3rem] absolute right-8 top-8"
              onClick={() => toggleExpansion((prev) => !prev)}
            />
            <ul className="flex  flex-col justify-around mt-16 h-[80%]">
              {["home", "tools", "about", "contact"].map((item, index) => (
                <Link to={`${item}`}>
                  {" "}
                  <li
                    onClick={() => toggleExpansion((prev) => !prev)}
                    key={index}
                    className="text-white w-full  text-[2.5rem] capitalize	 "
                  >
                    {item}{" "}
                  </li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
