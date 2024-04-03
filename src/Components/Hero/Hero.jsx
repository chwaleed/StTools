import React from "react";
import img1 from "../../assets/5.png";
import img2 from "../../assets/pen.png";
import img3 from "../../assets/study.png";
import img4 from "../../assets/plagrism.png";
import img5 from "../../assets/pdf.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Animate from "../HightOrder/Animate";
import { motion } from "framer-motion";

function Hero() {
  return (
    <div className=" overflow-hidden  pb-[8rem] max-md:pb-0  max-md:flex-col-reverse  relative  w-full flex  ">
      <div className="w-[50%] max-md:w-full max-md:pb-28 max-md:ml-0 max-md:flex max-md:flex-col max-md:items-center  mt-16 ml-24">
        <motion.h1
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
          className=" text-[7rem] max-md:text-center max-md:text-[2rem] max-md:w-[90%] text-gray-200 leading-none font-semibold tracking-tight "
        >
          Empowering Academic Success
        </motion.h1>
        <motion.p
          initial={{ y: -30 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
          className="text-[1.3rem] max-md:w-[85%] text-gray-300 w-[70%] mt-10 "
        >
          Welcome to our Sudents Tool hub! Boost your productivity with our GPA
          calculator, word counter, case converter, and more. Everything you
          need for academic success, all in one place. Join us today!
        </motion.p>
      </div>
      <div className="relative max-md:w-full  w-[40%]">
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
          src={img1}
          className="left-[-10%] max-md:left-[-1%] max-md:top-8   max-md:w-[130px] absolute w-[40%]"
          alt=""
        />
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 0, rotate: 45 }}
          transition={{ type: "spring", stiffness: 500 }}
          src={img2}
          className="absolute max-md:left-4 max-md:bottom-10  max-md:w-[80px]   right-28   left-[-10%] top-[75%] rotate-45  w-[22%]"
          alt=""
        />
        <img
          src={img3}
          className="absolute  max-md:relative  max-md:w-[200px]   left-[50%] z-10  translate-x-[-50%] mt-[50%] translate-y-[-50%] w-[60%]"
          alt=""
        />
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 0, rotate: -45 }}
          transition={{ type: "spring", stiffness: 500 }}
          src={img5}
          className=" absolute max-md:bottom-12  max-md:w-[50px]  max-md:right-8  top-[75%] rotate-45 right-0 w-[20%]"
          alt=""
        />
        <motion.img
          initial={{ y: -10 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 500 }}
          src={img4}
          className=" absolute   max-md:w-[100px]   top-[10%] z-0 rotate-45 right-0 w-[30%]"
          alt=""
        />
      </div>
      <Link to="/tools">
        {" "}
        <button className="group max-md:bottom-2 max-md:px-2  max-md:w-[60%] absolute flex items-center justify-center gap-7 text-white border-[3px] text-[1.4rem] px-12 font-bold bottom-[4%] left-[50%] translate-x-[-50%] rounded-[2rem] py-3 border-[gray-200]">
          Visit Tools
          <FaArrowRight className="transition-transform duration-300 transform translate-x-0 group-hover:translate-x-3" />
        </button>
      </Link>
    </div>
  );
}

export default Animate(Hero);
