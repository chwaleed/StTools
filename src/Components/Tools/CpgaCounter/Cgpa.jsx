import React, { useState } from "react";
import Animate from "../../HightOrder/Animate";
import { motion } from "framer-motion";
import GpaResult from "./GpaResult";
import quotes from "../../../assets/qoutes.json";

function Cgpa() {
  const [inputArr, setInputArr] = useState([0, 0]);
  const [creditArr, setCreditArr] = useState([]);
  const [gpa, setGpa] = useState(null);
  const [result, setResult] = useState(true);
  const [quote, setQuote] = useState({});
  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    setQuote(randomQuote);
  };

  const handleInput = (e, index) => {
    const newArr = [...inputArr];
    newArr[index] = Number(e);
    setInputArr(newArr);
  };
  const handleCredit = (e, index) => {
    const newArr = [...creditArr];
    newArr[index] = Number(e);
    setCreditArr(newArr);
  };
  const addInput = () => {
    setInputArr((prev) => [...prev, 0]);
  };
  const removeInput = () => {
    if (inputArr.length > 2) {
      setInputArr((prev) => prev.slice(0, -1));
      setCreditArr((prev) => prev.slice(0, -1));
    }
  };
  const calculation = () => {
    const newArr = inputArr.map((value, index) => value * creditArr[index]);
    const totalValue = newArr.reduce((acc, current) => acc + current, 0);
    const totalCrdits = creditArr.reduce((acc, current) => acc + current, 0);
    const totalGpa = (totalValue / totalCrdits).toFixed(2);
    setGpa(totalGpa);
    setResult((prev) => !prev);
    getRandomQuote();
  };

  return (
    <div>
      {!result ? (
        <GpaResult calculation={calculation} value={gpa} quote={quote} />
      ) : (
        <div
          className={`py-10 flex flex-col 
            items-center `}
        >
          <h1 className="text-white font-bold w-[90%] text-[2rem] md:text-[3rem] text-center">
            CGPA & GPA Counter
          </h1>
          <div className="flex md:w-[37rem]  w-full   justify-around mt-5 md:justify-between md:gap-0 ">
            <button
              onClick={addInput}
              class="rounded-lg px-4 py-2 hover:bg-gray-800  bg-gray-900 text-gray-100"
            >
              Add Semester
            </button>
            <button
              disabled={inputArr.length <= 2}
              onClick={removeInput}
              class=" disabled:hidden rounded-lg px-4 py-2 hover:bg-gray-800 bg-gray-900 text-gray-100"
            >
              Remove Semester
            </button>
          </div>
          <div className="   bg-slate-800 md:w-[45rem] flex items-center  py-8 max-md:w-[98%] flex-col bg-whit gap-4  md:px-10 md:py-8 rounded-lg justify-around mt-8 md:justify-center md:gap-6 ">
            <div className="flex text-[1rem] gap-2 px-3 w-full   font-semibold justify-around md:text-[1.2rem] md:justify-between m md:w-full text-white">
              <h1 className=" ">Add Semester or Subject</h1>
              <h1>Add Credit Hours</h1>
            </div>
            {inputArr.map((item, index) => (
              <motion.div
                initial={{ y: -10 }}
                animate={{ y: 0 }}
                transition={{ type: "spring", stiffness: 500 }}
                key={index}
                className="flex  justify-around md:justify-between md:w-full  w-full "
              >
                <div class="relative  md:w-[65%] w-[50%]">
                  <input
                    type="number"
                    max="4"
                    min="1"
                    step="0.1"
                    value={inputArr[index] || ""}
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5   pt-4 w-full   border-[2px] md:text-lg text-sm   bg-transparent rounded-lg border-1  appearance-none text-white border-gray-600 focus:border-blue-500 focus:outline-none focus:ring-0  peer"
                    onChange={(e) => handleInput(e.target.value, index)}
                    placeholder=""
                  />
                  <label
                    for="floating_outlined"
                    class="absolute pointer-events-none md:text-lg text-md bg-[#1E293B]  text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0]  px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                  >
                    Enter Points
                  </label>
                </div>
                <div class="relative  md:w-[25%]  w-[30%]">
                  <input
                    min="1"
                    onChange={(e) => handleCredit(e.target.value, index)}
                    value={creditArr[index] || ""}
                    type="number"
                    id="floating_outlined"
                    class="block px-2.5 pb-2.5 pt-4  w-full md:w-full border-[2px] md:text-lg text-sm text-white bg-transparent rounded-lg border-1  appearance-none  border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                    placeholder=" "
                  />
                </div>
              </motion.div>
            ))}
            <button
              onClick={calculation}
              class="rounded-xl px-16 py-1 mt-4  font-semibold text-[1.5rem] hover:bg-gray-200  bg-white text-gray-900"
            >
              {" "}
              Calulate{" "}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Animate(Cgpa);
