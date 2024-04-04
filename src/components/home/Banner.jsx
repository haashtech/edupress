import React from "react";

function Banner() {
  return (
      <div
        className="sm:py-24 py-16 section-container flex items-center md:justify-start justify-center"
        style={{ backgroundImage: "url('/images/home/bannerbg.png')" }}
      >
        <div className="flex flex-col md:w-[40%] w-[80%] md:gap-1 gap-3 justify-center   md:items-start ">
          <h2 className="w-[100%]  md:text-[2.3rem] sm:text-[2rem] text-[1.5rem] font-bold pe-10">Build Skills with Online Course</h2>
          <small>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</small>
          <button className="bg-primary p-3 text-white rounded-full text-[0.8rem]">Posts comment</button>
        </div>
      </div>

  );
}

export default Banner;
