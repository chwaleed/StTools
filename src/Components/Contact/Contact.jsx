import React from "react";
import { motion } from "framer-motion";

function Contact() {
  return (
    <motion.div
      initial={{ x: 200 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6 }}
      class="min-w-screen  flex mt-[2rem] justify-center px-5 py-5"
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
            <span class="text-green-400">contactUs</span>{" "}
            <span class="text-pink-500">=</span>{" "}
            <em class="text-blue-400">function</em>() {`{`}{" "}
          </p>
          <p>
            &nbsp;&nbsp;<span class="text-pink-500">return</span> {`{`}{" "}
          </p>
          <p className="text-green-400">&nbsp;&nbsp; // Get in touch</p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;gamil:{" "}
            <span class="text-yellow-300">
              '
              <a
                href="mailto:chwaleedmueez@gmail.com"
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                chwaleedmueez@gmail.com
              </a>{" "}
              '
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;phone:{" "}
            <span class="text-yellow-300">
              '{" "}
              <a
                href="tel:+923106342717"
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                0310-6342717
              </a>
              '
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;facebook:{" "}
            <span class="text-yellow-300">
              '{" "}
              <a
                href=" https://www.facebook.com/choudharywaleed.0?mibextid=qi2Omg&rdid=8AKOdW4ZyoDWrv0N"
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                Choudhary Waleed
              </a>{" "}
              '
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;instagram:{" "}
            <span class="text-yellow-300">
              '{" "}
              <a
                href=" https://www.instagram.com/_choudhary_waleed?utm_source=qr&igsh=MWd6djg3a3BlbDZjeg=="
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                @_CHOUDHARY_WALEED
              </a>{" "}
              '{" "}
            </span>
            ,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;twitter:{" "}
            <span class="text-yellow-300">
              '{" "}
              <a
                href=" https://x.com/M_Waleed_Dev?t=ICTdOzL8IWtpTgDrYqE2_w&s=09"
                target="_blank"
                class="text-yellow-300 hover:underline focus:border-none"
              >
                M_Waleed_Dev
              </a>{" "}
              '{" "}
            </span>
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

export default Contact;
