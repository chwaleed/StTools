import React, { useState } from "react";
import Animate from "../../HightOrder/Animate";
import { motion, wrap } from "framer-motion";

function CaseConverter() {
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e);
  };
  const UpperCase = () => {
    setInput(input?.toUpperCase());
  };
  const LowerCase = () => {
    setInput(input?.toLowerCase());
  };
  const ToggleCase = () => {
    let splited = input.split(" ");
    let words = splited
      .map((word, index) => {
        let splitedWord = word.split("");

        return splitedWord
          .map((char, index) => {
            if (index > 0) {
              return char.toUpperCase();
            } else {
              return char.toLowerCase();
            }
          })
          .join("");
      })
      .join(" ");
    setInput(words);
  };

  const AlternateCase = () => {
    let splited = input.split(" ");
    let words = splited
      .map((word, index) => {
        let splitedWord = word.split("");

        return splitedWord
          .map((char, index) => {
            if (index % 2 === 0) {
              return char.toLowerCase();
            } else {
              return char.toUpperCase();
            }
          })
          .join("");
      })
      .join(" ");
    setInput(words);
  };

  const SentenceCase = () => {
    let splited = input.split(". ");
    let sentence = splited
      .map((sentence) => {
        let words = sentence.split(" ");
        return words
          .map((word, index) => {
            let char = word.split("");
            if (index === 0) {
              return char
                .map((char, index) => {
                  if (index === 0) {
                    return char.toUpperCase();
                  } else {
                    return char.toLowerCase();
                  }
                })
                .join("");
            } else {
              return word.toLowerCase();
            }
          })
          .join(" ");
      })
      .join(". ");
    setInput(sentence);
  };

  const handleClick = (item) => {
    if (item === 0) UpperCase();
    if (item === 1) LowerCase();
    if (item === 2) ToggleCase();
    if (item === 3) SentenceCase();
    if (item === 4) AlternateCase();
  };

  return (
    <div className="relative min-h-screen">
      <h1 className="text-white text-center text-[ 2rem] md:text-[2.5rem] md:mt-20 mt-8 font-semibold ">
        Case Converter
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
            value={input}
            onChange={(e) => handleInput(e.target.value)}
            id="comment"
            rows="10"
            class="w-full px-0 text-lg outline-none border-0 border-[bg-gray-800]  bg-gray-800  text-white placeholder-gray-400"
            placeholder="Write a comment..."
            required
          />
        </div>
        <div class="flex flex-wrap items-center gap-3 justify-evenly w-full px-3 py-2 border-t border-gray-600">
          {[
            "Upper Case",
            "lower case",
            "tOGGEL cASE",
            "Sentence case",
            "aLtErNaTe cAsE",
          ].map((item, index) => (
            <button
              key={index}
              onClick={() => handleClick(index)}
              class="inline-flex items-center py-2.5 px-4 text-md font-medium text-center text-white bg-blue-700 rounded-lg  hover:bg-blue-800"
            >
              {item}
            </button>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

export default Animate(CaseConverter);
