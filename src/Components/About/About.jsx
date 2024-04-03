import React from "react";
import { motion } from "framer-motion";
import Animate from "../HightOrder/Animate";

function About() {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      class="min-w-screen   flex mt-[5rem] justify-center px-5 py-5"
    >
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
        class="rounded-lg md:w-[50%] h-[70%] shadow-xl bg-gray-900 text-white"
      >
        <div class="border-b border-gray-800 px-8 py-3">
          <div class="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
          <div class="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
          <div class="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div class="px-8 text-[1.2rem] flex flex-col gap-1 md:text-[1.6rem] py-6">
          <p>
            <em class="text-blue-400">const</em>{" "}
            <span class="text-green-400">aboutMe</span>{" "}
            <span class="text-pink-500">=</span>{" "}
            <em class="text-blue-400">function</em>() {`{`}{" "}
          </p>
          <p>
            &nbsp;&nbsp;<span class="text-pink-500">return</span> {`{`}{" "}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
            <span class="text-yellow-300">'Muhammd Waleed'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
            <span class="text-yellow-300">'Front-end Developer'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;experiance:{" "}
            <span class="text-yellow-300">'2 Years'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;skills:{" "}
            <span class="text-yellow-300">{`["HTML" , "CSS", "Javascript", "React Js"]`}</span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
            <span class="text-yellow-300">
              '
              <a
                href=" https://dev-waleed.netlify.app"
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                https://dev-waleed.netlify.app
              </a>
              '
            </span>
            ,
          </p>
          <p>&nbsp;&nbsp; {`}`} </p>
          <p>{`}`}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default Animate(About);
