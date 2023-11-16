import { IconButton } from "@mui/material";
import React, { useState } from "react";

const CgpaForm = () => {
  const gradeOptions = ["A", "B", "C", "D", "E", "F"];
  const [gradeSelect, setGradeSelect] = useState("Grade");
  const [creditsSelect, setCreditsSelect] = useState("Credits");
  const [isOpen, setIsOpen] = useState(false);
  const [isCreditsOpen, setIsCreditsOpen] = useState(false);
  const [creditValue, setCreditValue] = useState(1);

  const increaseCreditValue = () => {
    setCreditValue(creditValue + 1);
    setCreditsSelect(creditValue + 1);
  };

  const decreaseCreditValue = () => {
    setCreditValue(creditValue - 1);
    setCreditsSelect(creditValue - 1);
    if (creditValue <= 1) {
      setCreditValue(1);
      setCreditsSelect(1);
    }
  };

  const toggleGradeDropDown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCreditsDropDown = () => {
    setIsCreditsOpen(!isCreditsOpen);
    setCreditsSelect(creditValue);
  };

  const handleGradeSelect = (option) => {
    setGradeSelect(option);
    setIsOpen(false);
  };

  return (
    <div
      id="CGC-container"
      className="rounded-lg w-[520px] h-[52px] mr-3 flex items-center"
    >
      {/* course container */}
      <div className="flex-1">
        <input
          type="text"
          placeholder="Course Title"
          className="leading-6 w-full"
          id="course"
          required
        />
      </div>

      {/* grade container */}
      <div className="flex-1 relative py-3" id="grade-container">
        <div
          onClick={toggleGradeDropDown}
          id="grade-select"
          className="relative cursor-pointer"
        >
          {gradeSelect}
          <div className="absolute mt-[-30px] right-2">
            <IconButton>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:chevron-up">
                  <path
                    id="Vector"
                    d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                    fill="#212521"
                    fill-opacity="0.5"
                  />
                </g>
              </svg>
            </IconButton>
          </div>
        </div>

        {isOpen && (
          <div
            id="grade-option-select"
            className="absolute top-full left-0 bg-white z-50"
          >
            <h1 className="px-3" id="grade-header">
              Select Grade
            </h1>
            {gradeOptions.map((gradeOption) => (
              <div
                key={gradeOption}
                className="duration-75 px-4"
                id="grade-option"
                onClick={() => handleGradeSelect(gradeOption)}
              >
                {gradeOption}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* credits container */}
      <div className="flex-1 relative py-3" id="credits-container">
        <div
          onClick={toggleCreditsDropDown}
          id="credits-select"
          className="relative cursor-pointer"
        >
          {creditsSelect}
          <div className="absolute mt-[-30px] right-2">
            <IconButton>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="mdi:chevron-up">
                  <path
                    id="Vector"
                    d="M7.41 8.59L12 13.17L16.59 8.59L18 10L12 16L6 10L7.41 8.59Z"
                    fill="#212521"
                    fill-opacity="0.5"
                  />
                </g>
              </svg>
            </IconButton>
          </div>
        </div>

        {isCreditsOpen && (
          <div
            id="credits-option-select"
            className="absolute top-full left-0 bg-white z-50  rounded text-black"
          >
            <h1 id="credits-header" className="px-3">
              Select Credit
            </h1>
            <div
              className="flex items-center justify-between px-3"
              id="credits-option"
            >
              <span className="mr-auto">{creditValue}</span>

              <div className="flex items-center">
                <IconButton onClick={decreaseCreditValue}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="carbon:subtract-alt">
                      <path
                        id="Vector"
                        d="M10 2.5C14.125 2.5 17.5 5.875 17.5 10C17.5 14.125 14.125 17.5 10 17.5C5.875 17.5 2.5 14.125 2.5 10C2.5 5.875 5.875 2.5 10 2.5ZM10 1.25C5.1875 1.25 1.25 5.1875 1.25 10C1.25 14.8125 5.1875 18.75 10 18.75C14.8125 18.75 18.75 14.8125 18.75 10C18.75 5.1875 14.8125 1.25 10 1.25Z"
                        fill="#212521"
                        fill-opacity="0.5"
                      />
                      <path
                        id="Vector_2"
                        d="M5 9.375H15V10.625H5V9.375Z"
                        fill="#212521"
                        fill-opacity="0.5"
                      />
                    </g>
                  </svg>
                </IconButton>
                <IconButton onClick={increaseCreditValue}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="fluent-mdl2:add-to">
                      <path
                        id="Vector"
                        d="M10.625 9.375H13.75V10.625H10.625V13.75H9.375V10.625H6.25V9.375H9.375V6.25H10.625V9.375ZM10 1.25C10.8073 1.25 11.582 1.35417 12.3242 1.5625C13.0664 1.77083 13.763 2.0638 14.4141 2.44141C15.0651 2.81901 15.6543 3.27474 16.1816 3.80859C16.709 4.34245 17.1647 4.93164 17.5488 5.57617C17.9329 6.2207 18.2292 6.91732 18.4375 7.66602C18.6458 8.41471 18.75 9.19271 18.75 10C18.75 10.8073 18.6458 11.582 18.4375 12.3242C18.2292 13.0664 17.9362 13.763 17.5586 14.4141C17.181 15.0651 16.7253 15.6543 16.1914 16.1816C15.6576 16.709 15.0684 17.1647 14.4238 17.5488C13.7793 17.9329 13.0827 18.2292 12.334 18.4375C11.5853 18.6458 10.8073 18.75 10 18.75C9.19271 18.75 8.41797 18.6458 7.67578 18.4375C6.93359 18.2292 6.23698 17.9362 5.58594 17.5586C4.9349 17.181 4.3457 16.7253 3.81836 16.1914C3.29102 15.6576 2.83529 15.0684 2.45117 14.4238C2.06706 13.7793 1.77083 13.0827 1.5625 12.334C1.35417 11.5853 1.25 10.8073 1.25 10C1.25 9.19271 1.35417 8.41797 1.5625 7.67578C1.77083 6.93359 2.0638 6.23698 2.44141 5.58594C2.81901 4.9349 3.27474 4.3457 3.80859 3.81836C4.34245 3.29102 4.93164 2.83529 5.57617 2.45117C6.2207 2.06706 6.91732 1.77083 7.66602 1.5625C8.41471 1.35417 9.19271 1.25 10 1.25ZM10 17.5C10.6901 17.5 11.3542 17.4121 11.9922 17.2363C12.6302 17.0605 13.2259 16.8066 13.7793 16.4746C14.3327 16.1426 14.8405 15.752 15.3027 15.3027C15.765 14.8535 16.1556 14.349 16.4746 13.7891C16.7936 13.2292 17.0443 12.6302 17.2266 11.9922C17.4089 11.3542 17.5 10.6901 17.5 10C17.5 9.3099 17.4121 8.64583 17.2363 8.00781C17.0605 7.36979 16.8066 6.77409 16.4746 6.2207C16.1426 5.66732 15.752 5.15951 15.3027 4.69727C14.8535 4.23503 14.349 3.8444 13.7891 3.52539C13.2292 3.20638 12.6302 2.95573 11.9922 2.77344C11.3542 2.59115 10.6901 2.5 10 2.5C9.3099 2.5 8.64583 2.58789 8.00781 2.76367C7.36979 2.93945 6.77409 3.19336 6.2207 3.52539C5.66732 3.85742 5.15951 4.24805 4.69727 4.69727C4.23503 5.14648 3.8444 5.65104 3.52539 6.21094C3.20638 6.77083 2.95573 7.36979 2.77344 8.00781C2.59115 8.64583 2.5 9.3099 2.5 10C2.5 10.6901 2.58789 11.3542 2.76367 11.9922C2.93945 12.6302 3.19336 13.2259 3.52539 13.7793C3.85742 14.3327 4.24805 14.8405 4.69727 15.3027C5.14648 15.765 5.65104 16.1556 6.21094 16.4746C6.77083 16.7936 7.36979 17.0443 8.00781 17.2266C8.64583 17.4089 9.3099 17.5 10 17.5Z"
                        fill="#212521"
                        fill-opacity="0.5"
                      />
                    </g>
                  </svg>
                </IconButton>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CgpaForm;
