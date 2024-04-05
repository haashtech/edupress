// Curriculum.js
import React from "react";
import Accordian, { AccordianItem } from "./Accodion";
import { MdLock } from "react-icons/md";

function Curriculum() {
  return (
    <Accordian>
      <AccordianItem
        value="1"
        trigger={<div>Lessons with video content</div>}
        lessonInfo={{ lessons: "5 Lessons", duration: "45 Mins" }}
      >
        <div className="flex mb-5  justify-between items-center md:text-sm text-xs px-5">
          <span>Lessons with video content</span>
          <div className="flex items-center md:gap-5 gap-1">
            <button className="md:p-2 p-1 bg-blue-500 md:text-sm md:font-semibold text-white rounded-lg md:me-3">
              Preview
            </button>
            <span>12:30</span>
            <span>
              <MdLock />
            </span>
          </div>
        </div>
        <div className="flex mb-5 justify-between items-center md:text-sm text-xs px-5">
          <span>Lessons with video content</span>
          <div className="flex items-center md:gap-5 gap-1">
            <button className="md:p-2 p-1 bg-blue-500 md:text-sm md:font-semibold text-white rounded-lg md:me-3">
              Preview
            </button>
            <span>12:30</span>
            <span>
              <MdLock />
            </span>
          </div>
        </div>
      </AccordianItem>
      <AccordianItem
        value="2"
        trigger={<div>Lessons with video content</div>}
        lessonInfo={{ lessons: "5 Lessons", duration: "45 Mins" }}
      >
         <div className="flex mb-5 justify-between items-center md:text-sm text-xs px-5">
          <span>Lessons with video content</span>
          <div className="flex items-center md:gap-5 gap-1">
            <button className="md:p-2 p-1 bg-blue-500 md:text-sm md:font-semibold text-white rounded-lg md:me-3">
              Preview
            </button>
            <span>12:30</span>
            <span>
              <MdLock />
            </span>
          </div>
        </div>
      </AccordianItem>
      {/* Add more AccordianItem components for additional curriculum sections */}
    </Accordian>
  );
}

export default Curriculum;
