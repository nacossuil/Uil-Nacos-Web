import React from "react";
import "./cgpa.css";
import CgpaFormContainer from "./CgpaFormContainer";

const CgpaCalculatorPage = () => {
  return (
    <div className="bg-green-300">
      {/* CGPA calculator */}
      <div
        id="cgpa-container"
        className="w-[630px] min-h-[774px] mx-auto bg-white rounded-[20px] flex flex-col"
      >
        {/* CGPA calculator title*/}
        <h1 className="text-[#212521] leading-[26px] py-10 font-bold text-center">
          CGPA Calculator
        </h1>

        {/* Cgpa form container */}
        <div className="flex-1">
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
          <CgpaFormContainer />
        </div>

        {/* course code, grade and  credits container */}

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
            disabled
            className="bg-[#138601] leading-5 font-bold text-white"
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
