import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import tools from "../../assets/tools";

function Card() {
  return (
    <div className="flex mt-14  max-md:mt-0 max-md:w-full  max-md:px-3 flex-wrap px-14 gap-8 justify-center py-16">
      {tools.map((item, index) => (
        <Link
          to={item.path}
          className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-700 dark:border-gray-700 "
        >
          <motion.div
            initial={{ y: -10 }}
            animate={{ y: 0 }}
            transition={{ type: "spring", stiffness: 500 }}
            class="flex flex-col max-md:pb-4 items-center pb-8"
          >
            <img
              class={`w-24 h-24 mb-3 bg-${item.color} mt-6 rounded-md shadow-lg`}
              src={item.image}
              alt="Gpa"
            />
            <h5 class="mb-1 text-xl font-medium text-white dark:text-white">
              {item.heading}
            </h5>
          </motion.div>
        </Link>
      ))}
    </div>
  );
}

export default Card;
