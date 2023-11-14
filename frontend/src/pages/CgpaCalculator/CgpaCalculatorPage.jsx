import React from "react";
import "./cgpa.css";

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
            className="rounded-lg  w-[520px] h-[52px] flex items-center "
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
            <div className="flex-1">
              <select
                name="grade"
                id="grade-select"
                className="leading-6 w-full"
              >
                <option value="" disabled selected>
                  Grade
                </option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>

            {/* credits container */}
            <div className="flex-1">
              <select name="credits" id="credits" className="leading-6 w-full">
                <option value="" disabled selected>
                  Credits
                </option>
                <option value="">1</option>
              </select>
            </div>
          </div>

          <div className="ml-4 ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default CgpaCalculatorPage;
