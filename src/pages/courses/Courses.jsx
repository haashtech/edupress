import React from "react";
import { extendedCoursesList } from "../../components/courses/CourseList";
import PaginationButtons from "../../components/courses/PaginationButtons";

function Courses() {
  return (
    <div className="section-container my-20 flex">
<div className="flex gap-6 flex-col w-[70%]">
      {extendedCoursesList.map((item, idx) => (
        
         <div className="grid">
           <div className="card card-side ">
          <figure>
            <img
              src={item.image}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">New movie is released!</h2>
            <p>Click the button to watch on Jetflix app.</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Watch</button>
            </div>
          </div>
        </div>
         </div>
      
      ))}

      <PaginationButtons/>
  </div>
  <div className="w-[30%]">
    dfjsh
  </div>
    </div>
  );
}

export default Courses;
