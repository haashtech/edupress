import React from "react";
import { TiTick } from "react-icons/ti";
function Posters() {
  const counter = [
    { id: 1, title: "Active Students", count: "25K+" },
    { id: 2, title: "Total Courses", count: "899" },
    { id: 1, title: "Instructor", count: "158" },
    { id: 1, title: "Satisfaction rate", count: "100%" },
  ];

  return (
    <div className="section-container pb-10 ">
      <div
        className=" rounded-2xl p-10"
        style={{ backgroundImage: "url('/images/home/Vector.png')" }}
      >
        <div className="space-y-2 flex px-5 flex-col md:w-[50%] w-[80%] md:gap-1 gap-3 justify-center   md:items-start ">
          <h2 className="w-[100%]  md:text-[2.3rem] sm:text-[2rem] text-[1.5rem] font-bold pe-10">
            LearnPress Add-Ons
          </h2>
          <small>
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </small>
          <button className="capitalize bg-primary p-3 text-white rounded-full text-[0.8rem]">
            explorer course
          </button>
        </div>
      </div>

      {/* counter */}

      <div className="py-20 grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 justify-center items-center gap-5">
        {counter.map((count, index) => (
          <div className="flex rounded-lg justify-center bg-slate-100 sm:py-12 py-11 items-center">
            <div className="text-center flex flex-col">
              <span className="text-xl text-primary font-bold">
                {count.count}
              </span>
              <span className="font-semibold text-sm">{count.title}</span>
            </div>
          </div>
        ))}
      </div>

      {/* certifications */}

      <div className="flex flex-col justify-center items-center md:flex-row w-[100%]">
        <div className="md:w-1/2 sm:w-[100%] w-[90%]">
          <img src="/images/home/ads.png" className="" alt="image" />
        </div>
        <div className="md:w-1/2 sm:w-[100%] w-[90%] flex flex-col md:ps-20 md:mt-0 mt-10 space-y-4">
          <h1 className="text-[32px] font-semibold ">
            Grow us your skill with LearnPress LMS
          </h1>
          <div className="">
            <span className="text-sm">
              We denounce with righteous indignation and dislike men who are so
              beguiled and demoralized that cannot trouble.
            </span>
          </div>
          <div>
            <span className="flex items-center">
              <TiTick color="green" size={20} />
              <span className="font-semibold">Certification</span>
            </span>
            <span className="flex items-center">
              <TiTick color="green" size={20} />
              <span className="font-semibold">Certification</span>
            </span>
            <span className="flex items-center">
              <TiTick color="green" size={20} />
              <span className="font-semibold">Certification</span>
            </span>
            <span className="flex items-center">
              <TiTick color="green" size={20} />
              <span className="font-semibold">Certification</span>
            </span>
          </div>
        </div>
      </div>

      {/* poster 2 */}
      <div
        className=" rounded-2xl mt-24 md:py-10 py-6"
        style={{ backgroundImage: "url('/images/home/vector2.png')" }}
      >
        <div className="sm:space-y-3 flex px-5 flex-col  justify-center items-center">
          <h4>PROVIDING AMAZING</h4>
          <h2 className="capitalize md:text-[2.1rem] sm:text-[2rem] text-[1.5rem] font-bold ">
            education wordpress theme
          </h2>
          <small>
            The next level of LMS WordPress Theme. Learn anytime and anywhere.
          </small>
          <button className="capitalize bg-primary p-3 text-white rounded-full text-[0.8rem]">
            explorer course
          </button>
        </div>
      </div>
    </div>
  );
}

export default Posters;
