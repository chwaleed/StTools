import React, { useEffect, useState } from "react";
import Animate from "../../HightOrder/Animate";
import { motion } from "framer-motion";

function WordCounter() {
  const [words, setWord] = useState("");
  const [count, setCount] = useState(0);

  const countWords = () => {
    const count = words.split(/\s+/);
    setCount(count.length - 1);
  };
  useEffect(() => {
    countWords();
  }, [words]);

  return (
    <div className="relative">
      <h1 className="text-white text-center text-[2rem] md:text-[2.5rem] md:mt-20 mt-8 font-semibold ">
        Word Counter
      </h1>
      <motion.div
        initial={{ y: -10 }}
        animate={{ x: "-50%", y: 20 }}
        transition={{ type: "spring", stiffness: 500 }}
        class="w-[90%] md:w-[60%] absolute left-[50%] translate-x-[-50%] translate-y-[6%]   mb-4 border  rounded-lg bg-gray-700 border-gray-600"
      >
        <div class="px-4 py-2  rounded-t-lg bg-gray-800">
          <label for="comment" class="sr-only">
            Your text
          </label>
          <textarea
            value={words}
            onChange={(e) => setWord(e.target.value)}
            id="comment"
            rows="10"
            class="w-full px-0 text-lg outline-none border-0 border-[bg-gray-800]  bg-gray-800  text-white placeholder-gray-400"
            placeholder="Write a comment..."
            required
          />
        </div>
        <div class="flex items-center gap-3 justify-between w-full px-3 py-2 border-t border-gray-600">
          <button
            onClick={() => setWord("")}
            class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
          >
            Clear Text
          </button>
          <div>
            <span className="text-white font-bold md:text-[1.5rem] text-[1.2rem]  ">
              Words:{" "}
            </span>
            <h1 class="inline-flex before:  items-center py-2.5 px-4 md:text-xl text-lg font-medium text-center text-white bg-gray-800 rounded-md   ">
              {count}
            </h1>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Animate(WordCounter);
