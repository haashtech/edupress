import React, { useEffect, useState } from "react";
import PaginationButtons from "../../components/courses/PaginationButtons";
import { coursesList } from "../../components/courses/CourseList";
import CourseCategory from "../../components/courses/CourseCategory";
import CourseCard from "../../components/courses/CourseCard ";
import useDataFetcher from "../../components/courses/useDataFetcher";

function Courses() {
  const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

  return (
   <div className="section-container ">
     <div className="py-10 flex md:flex-row flex-col">
      <div className="flex gap-6 flex-col md:w-[70%]">
        <div className="flex justify-between">
        <h3 className="text-2xl font-bold">All Courses</h3>
        <div className="flex items-center  gap-4">
        <input
        type="text"
        className="border-b-[1px] border-b-black bg-transparent outline-none"
        placeholder="search"
      />
      <img src="/images/home/menu.png" alt="" />
      <img src="/images/home/filter.png" alt="" />
        </div>
        </div>
        {pages.map((item, idx) => (
          <CourseCard key={idx} item={item} />
        ))}

        <PaginationButtons
         totalPages={totalPages}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
        />
      </div>
      <div className="md:w-[30%] ps-5">

        <CourseCategory 
        
        />
      </div>
    </div>
   </div>
  );
}

export default Courses;
