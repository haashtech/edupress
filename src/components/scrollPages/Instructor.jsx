import React from "react";

import fb from '/images/home/img/fb.png'
import pintrest from '/images/home/img/pintrest.png';
import twitter from '/images/home/img/twitter.png';
import instagram from '/images/home/img/fb.png';
import youtube from '/images/home/img/youtube.png';


function Instructor({course}) {
  return (
    <div className="px-5 py-2">
      <div className="flex  items-center ">
        <img src="/images/home/img/instrector.png" alt="" />
       <div className="flex flex-col p-5 space-y-3 ">
       <h1 className="font-bold">ThimPress</h1>
        <span className="text-dark_gary">
          LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This
          is one of the best WordPress LMS Plugins which can be used to easily
          create & sell courses online.
        </span>
        <span className="text-dark_gary text-xs flex gap-1 items-center"><img src={course.lessonsIcon} alt="" />{course.lessons} Lessons</span>
       </div>
      </div>
      <div className="">
        <p>LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</p>
      </div>
      <div className="flex items-center gap-2">
        Follow:
            <img src={fb} alt="follow" className="cursor-pointer"/>
            <img src={pintrest} alt="follow" className="cursor-pointer"/>
            <img src={twitter} alt="follow" className="cursor-pointer"/>
            <img src={instagram} alt="follow" className="cursor-pointer"/>
            <img src={youtube} alt="follow" className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default Instructor;
