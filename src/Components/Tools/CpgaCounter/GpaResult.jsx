import React from "react";
import { motion } from "framer-motion";

function GpaResult({ calculation, value, quote }) {
  console.log(quote);
  return (
    <div className="w-screen h-full flex flex-col gap-5 items-start md:items-center px-6 mt-16 md:mt-7">
      <motion.button
        onClick={calculation}
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
        class="rounded-lg px-6 py-1 mt-4  font-semibold text-[1rem] hover:bg-gray-200  bg-white text-gray-900 md:py-3"
      >
        Calulate Again
      </motion.button>
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 500 }}
        className="text-white w-full  border-[2px] py-3 px-3 rounded-xl border-white md:w-[30rem] md:px-11 md:pb-14 md:pt-7"
      >
        <h1 className="text-[1.3rem] w-full font-bold text-center border-b-[2px] pb-2 border-white  md:text-[2rem] ">
          Calculated CGPA or GPA
        </h1>
        <div className=" mt-5">
          <h1 className="text-[1.2rem] font-semibold ">
            Your CGPA or GPA is :
          </h1>
          <h1 className="bg-gray-200 rounded-xl text-[2.5rem] text-gray-900 font-bold text-center py-6 mt-2  ">
            {value}
          </h1>
        </div>
        <div className="mt-5 w-full">
          <h1 className="text-[1.2rem] font-semibold ">Quote for you</h1>
          <div className="bg-gray-200  w-full rounded-xl  px-3 py-3 mt-2 ">
            <p className="text-[1rem] w-full text-gray-900 font-bold ">
              {quote["quote"]}
            </p>
            <p className="text-[#4338CA] font-bold mt-2 text-right">
              - {quote["author"]}
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default GpaResult;
