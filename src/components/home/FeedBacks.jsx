import React from "react";
import { Link } from "react-router-dom";

function FeedBacks() {
  const feeds = [
    {
      id: 1,
      des: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      auth: "Roe Smith",
      desig: "Designer",
    },
    {
      id: 1,
      des: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      auth: "Roe Smith",
      desig: "Designer",
    },
    {
      id: 1,
      des: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      auth: "Roe Smith",
      desig: "Designer",
    },
    {
      id: 1,
      des: "I must explain to you how all this mistaken . Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      auth: "Roe Smith",
      desig: "Designer",
    },
  ];

  const coursesList = [
    { id: 1, title: "Best LearnPress WordPress Theme Collection for 2023", date:"Jan 24, 22023", des:"Looking for an amazing & well-functional LearnPress WordPress Theme?...", image: '/images/home/img/article1.png' },
    { id: 2, title: "Best LearnPress WordPress Theme Collection for 2023", date:"Jan 24, 22023", des:"Looking for an amazing & well-functional LearnPress WordPress Theme?...", image: '/images/home/img/article2.png' },
    { id: 3, title: "Best LearnPress WordPress Theme Collection for 2023", date:"Jan 24, 22023", des:"Looking for an amazing & well-functional LearnPress WordPress Theme?...", image: '/images/home/img/article3.png' },
];
  return (
    <>
    <div className="section-container">
      <div className="pt-2 flex flex-col justify-center items-center">
        <h1 className="text-2xl font-semibold">Student feedbacks</h1>
        <small className="text-xs text-[#555555]">
          What Students Say About Academy LMS
        </small>
      </div>
      <div className="py-14 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 justify-center items-center sm:gap-5 gap-1">
        {feeds.map((count, index) => (
          <div className="flex rounded-lg justify-center border p-2 items-center">
            <div className="text-start space-y-2 sm:p-3 flex flex-col">
              <span>
                <img src="/images/home/img/quote.png" className="w-6" alt="" />
              </span>
              <span className="md:text-[1rem] md:leading-5 text-xs">
                {count.des}
              </span>
              <span className="font-semibold text-sm">{count.auth}</span>
              <span className="text-sm">{count.desig}</span>
            </div>
          </div>
        ))}
      </div>

    
    </div>

      {/* ============ */}
      <div className="py-20 section-container">
        <div
        className=" rounded-2xl"
        style={{ backgroundImage: "url('/images/home/img/bgs.png')" }}
      >
        <div className="flex lg:flex-row lg:gap-0 gap-5 flex-col px-9 md:py-10 sm:h-full py-3 items-center">
          <div className="lg:w-1/2 flex md:flex-row flex-col items-center gap-4">
            <div className="md:w-32 md:h-32 w-16 h-16  bg-white rounded-full flex justify-center items-center">
              <img
                src="/images/home/img/Vector.png"
                className="lg:w-16 w-10"
                alt=""
              />
            </div>
            <h3 className="font-semibold">Let’s Start With Academy LMS</h3>
          </div>
          {/* -------------------- */}
          <div className="lg:w-1/2 flex md:flex-row flex-col lg:justify-end justify-between gap-2 lg:gap-5">
            <button className="capitalize border border-primary p-3 text-primary rounded-full text-[0.8rem]">
              I’m a student
            </button>
            <button className="capitalize bg-primary p-3 text-white rounded-full text-[0.8rem]">
              Become an Instructor
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* latest articles */}
      <div className="section-container pb-20">
      <div className=" w-full mb-10 flex flex-col md:items-start justify-center items-center">
        <h2 className="text-[32px] font-semibold">Latest Articles</h2>
        <p className="text-sm">Explore our Popular Courses</p>
      </div>
      {/* cards */}
        <div className='grid md:grid-cols-3 sm:grid-cols-2 justify-between items-center gap-5'>
      {
        coursesList && coursesList.map((item,index) => (
          <Link to={`/blogs/${item.id}`}>
        <div key={item.id} className="card over:shadow-lg hover:scale-95 duration-300 cursor-pointer">
        <figure>
          <img
            src={item.image}
            alt={item.title}
            className="p-1"
          />
        </figure>
        <div className="py-5 px-2 space-y-2">
          <h1 className="text-lg font-semibold hover:text-primary">{item.title}</h1>
          <div className="flex gap-3">
            <small className="flex items-center text-xs gap-1">
              <img src="/images/home/img/date.png" alt={item.date} />
              {item.date}
            </small>
          </div>
          <div className="flex justify-between card-actions ">
          <div className="sm:text-sm">
             <span className="sm:text-sm text-xs">{item.des}</span>
            </div>
          </div>
        </div>
      </div>
          </Link>
        ))
      }
        </div>
    </div>
      
    </>
  );
}

export default FeedBacks;
