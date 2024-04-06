import React from "react";
import { Link } from "react-router-dom";

function FeaturedCourses() {

    const coursesList = [
        { id: 1, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-1.png' },
        { id: 2, by:"Determined-Poitras", title: "Design a website with ThimPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-2.png' },
        { id: 3, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-3.png' },
        { id: 4, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image-4.png' },
        { id: 5, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image5.png' },
        { id: 6, by:"Determined-Poitras", title: "Create an LMS Website with LearnPress", weeks:"2Weeks", students:"156 students", price:"$52", offer:"free", des:"view more", image: '/images/home/img/Image.png' },
    ];
  return (
    <div className="section-container sm:py-24 py-16">
      <div className=" w-full mb-10">
        <h2 className="text-[32px] font-semibold">Featured courses</h2>
        <p className="text-sm">Explore our Popular Courses</p>
      </div>
      {/* cards */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-between items-center gap-5'>
      {
        coursesList && coursesList.map((item,index) => (
          <Link to={`/courses/${item.id}`}>
        <div key={item.id} className="card over:shadow-lg hover:scale-95 duration-300 cursor-pointer">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="p-1"
          />
        </figure>
        <div className="card-body space-y-2">
          <small className="card-normal">by <span className="font-semibold">{item.by}</span></small>
          <h1 className="text-lg font-semibold hover:text-primary">{item.title}</h1>
          <div className="flex gap-3">
            <small className="flex items-center text-xs gap-1">
              <img src="/images/home/img/week.png" alt={item.weeks} />
              {item.weeks}
            </small>
            <small className="flex items-center text-xs gap-1">
              <img src="/images/home/img/std.png" alt={item.students} />
              {item.students}
            </small>
          </div>
          <div className="flex pt-2 justify-between card-actions ">
          <div className="space-x-2">
              <small><del className="text-[#9D9D9D]">{item.price}</del></small>
              <small className="text-success">{item.offer} </small>
            </div>
            <div className="">
              <span className="">View more</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
        ))
      }
        </div>
    </div>
  );
}

export default FeaturedCourses;
