import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesList } from "../../components/courses/CourseList";
import BreadCrump from "../../components/courses/BreadCrump";
import Overview from "../../components/scrollPages/Overview";
import Curriculum from "../../components/scrollPages/Curriculum";
import Instructor from "../../components/scrollPages/Instructor";
import FAQs from "../../components/scrollPages/FAQs";
import Reviews from "../../components/scrollPages/Reviews";
import CommentAttach from "../../components/scrollPages/CommentAttach";

// import std from "/images/home/img/std.png";
// import week from "/images/home/img/week.png";
// import levels from "/images/home/img/levels.png";
// import lessons from "/images/home/img/lessons.png";
// import quiz from "/images/home/img/quiz.png";

function SingleCourseView() {
  const { courseId } = useParams();
  const [activeSection, setActiveSection] = useState("Overview");

  const handleClick = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "Overview":
        return <Overview />;
      case "Curriculum":
        return <Curriculum />;
      case "Instructor":
        return <Instructor course={course}/>;
      case "FAQs":
        return <FAQs />;
      case "Reviews":
        return <Reviews />;
      default:
        return null;
    }
  };

  const course = coursesList.find((course) => course.id === parseInt(courseId));

  return (
    <>
      {/* <BreadCrump /> */}
      {course ? (
        <>
          <div className="h-[250px] bg-black  justify-center flex flex-col">
            {/* head section */}
            <div className="section-container space-y-3">
              <div className="flex items-center gap-5">
                <button className="bg-dark_gary p-2 rounded-md md:text-[1rem] text-[0.8rem] text-white">
                  Photography
                </button>
                <span className="text-[#9D9D9D] md:text-[1rem] text-[0.8rem]">
                  by <span className="text-white">{course.by}</span>
                </span>
              </div>
              <div className="">
                <h1 className=" md:text-text-4xl text-[1.5rem] text-white capitalize font-semibold">
                  {course.title}
                </h1>
              </div>
              <div className="flex flex-wrap items-center md:space-x-4 space-x-2">
                <img src={course.week} alt="" />
                <span className="text-white text-xs">{course.weeks}</span>
                <img src={course.std} alt="" />
                <span className="text-white text-xs">{course.students}</span>
                <img src={course.levelIcon} alt="" />
                <span className="text-white text-xs">{course.levels}</span>
                <img src={course.lessonsIcon} alt="" />
                <span className="text-white text-xs">{course.lessons}</span>
                <img src={course.quiz} alt="" />
                <span className="text-white text-xs">3 Quizzes</span>
              </div>
            </div>
            {/* head section end*/}
          </div>
          <div className="section-container py-6">
            {/* box start */}

            <div className=" md:w-[70%] w-full h-[450px]  bg-white_gary rounded-lg">
              <div className="grid grid-cols-5 md:text-sm text-xs">
                <button
                  className={`${
                    activeSection === "Overview" ? "text-primary" : "text-black"
                  } border p-3 bg-white font-semibold  rounded-tl-[10px]`}
                  onClick={() => handleClick("Overview")}
                >
                  Overview
                </button>
                <button
                  className={`${
                    activeSection === "Curriculum"
                      ? "text-primary"
                      : "text-black"
                  } border p-3 bg-white font-semibold`}
                  onClick={() => handleClick("Curriculum")}
                >
                  Curriculum
                </button>
                <button
                  className={`${
                    activeSection === "Instructor"
                      ? "text-primary"
                      : "text-black"
                  } border p-3 bg-white font-semibold`}
                  onClick={() => handleClick("Instructor")}
                >
                  Instructor
                </button>
                <button
                  className={`${
                    activeSection === "FAQs" ? "text-primary" : "text-black"
                  } border p-3 bg-white font-semibold`}
                  onClick={() => handleClick("FAQs")}
                >
                  FAQs
                </button>
                <button
                  className={`${
                    activeSection === "Reviews" ? "text-primary" : "text-black"
                  } border p-3 bg-white font-semibold text-black rounded-tr-[10px]`}
                  onClick={() => handleClick("Reviews")}
                >
                  Reviews
                </button>
                {/* Add onClick handlers for other buttons */}
              </div>
              <div className="mx-5 h-[90%] scrollbar-none overflow-y-auto bg-white_gary rounded-lg">
                {renderSection()}
              </div>
              
            </div>
            {/* box end */}
            <div className="md:w-[70%]">
            <CommentAttach/>
            </div>
          </div>
        </>
      ) : (
        <div>Course not found!</div>
      )}
    </>
  );
}

export default SingleCourseView;
