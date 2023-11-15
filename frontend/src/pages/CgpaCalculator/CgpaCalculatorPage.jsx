import React from "react";
import "./cgpa.css";
import IconButton from "@mui/material/IconButton";

const CgpaCalculatorPage = () => {
  return (
    <div className="bg-green-300">
      {/* CGPA calculator */}
      <div
        id="cgpa-container"
        className="w-[630px] h-[774px] mx-auto bg-white rounded-[20px] "
      >
        {/* CGPA calculator title*/}
        <h1 className="text-[#212521] leading-[26px] py-10 font-bold text-center">
          CGPA Calculator
        </h1>

        {/* course code, grade and  credits container */}
        <div className="flex items-center justify-center">
          <div
            id="CGC-container"
            className="rounded-lg w-[520px] h-[52px] mr-3 flex items-center "
          >
            {/* course container */}
            <div className="flex-1">
              <input
                type="text"
                placeholder="Course Title"
                className="leading-6 w-full"
                id="course"
              />
            </div>

            {/* grade container */}
            <div className="flex-1" id="grade-container">
              <select
                name="grade"
                id="grade-select"
                className="leading-6 w-full"
              >
                <option value="" disabled selected>
                  Grade
                </option>
                <option id="grade-option-A" value="5">
                  A
                </option>
                <option id="grade-option-B" value="4">
                  B
                </option>
                <option id="grade-option-C" value="3">
                  C
                </option>
                <option id="grade-option-D" value="2">
                  D
                </option>
                <option id="grade-option-E" value="1">
                  E
                </option>
                <option id="grade-option-F" value="0">
                  F
                </option>
              </select>
            </div>

            {/* credits container */}
            <div className="flex-1">
              <select name="credits" id="credits" className="leading-6 w-full">
                <option value="" disabled selected>
                  Credits
                </option>
                <option value="" className="flex">
                  1
                </option>
              </select>
            </div>
          </div>

          <IconButton>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="carbon:close-outline">
                <path
                  id="Vector"
                  d="M12 1.5C6.15 1.5 1.5 6.15 1.5 12C1.5 17.85 6.15 22.5 12 22.5C17.85 22.5 22.5 17.85 22.5 12C22.5 6.15 17.85 1.5 12 1.5ZM12 21C7.05 21 3 16.95 3 12C3 7.05 7.05 3 12 3C16.95 3 21 7.05 21 12C21 16.95 16.95 21 12 21Z"
                  fill="#212521"
                  fill-opacity="0.5"
                />
                <path
                  id="Vector_2"
                  d="M16.05 17.25L12 13.2L7.95 17.25L6.75 16.05L10.8 12L6.75 7.95L7.95 6.75L12 10.8L16.05 6.75L17.25 7.95L13.2 12L17.25 16.05L16.05 17.25Z"
                  fill="#212521"
                  fill-opacity="0.5"
                />
              </g>
            </svg>
          </IconButton>
        </div>

        {/* Add course button and  calculate button */}
        <div className="flex space-x-16 mx-8 my-6">
          <button
            id="add-btn"
            className="text-[#138601] leading-5 font-bold  hover:bg-[#138601] hover:text-white duration-200"
          >
            Add new course
          </button>

          <button
            id="calc-btn"
            disabled="false"
            className="bg-[#138601] leading-5 font-bold text-white opacity-50"
          >
            Calculate CGPA
          </button>
        </div>

        {/* Result section */}
        <div className="flex">
          {/* credits section */}
          <div id="credits-section">
            <h2 className="font-medium leading-5 text-xs">TOTAL CREDITS</h2>
            <h1 className="text-[32px] font-bold" id="credit-count">
              0
            </h1>
          </div>
          {/* cgpa section */}
          <div id="cgpa-section">
            <h2 className="font-medium leading-5 text-xs">CGPA</h2>
            <h1 className="text-[32px] font-bold" id="cgpa-count">
              0.00
            </h1>
          </div>
        </div>

        {/* Grade bar section */}
        <div>
          <h1 id="grade" className="text-xs font-medium leading-5 px-14 py-4">
            ACADEMIC STANDING:
          </h1>

          <div id="grade-bar" className="mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default CgpaCalculatorPage;
