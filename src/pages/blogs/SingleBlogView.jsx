import React from "react";
import { useParams } from "react-router-dom";
import { blogList } from "../../components/blog/BlogLists";
import BreadCrumps from "../../components/courses/BreadCrumps";
import { MdOutlineNavigateBefore, MdOutlineNavigateNext } from "react-icons/md";
// imported imgs
import img1 from "/images/home/img/profile.png";
import img2 from "/images/home/img/comment.png";
import img3 from "/images/home/img/date.png";
import Reviews from "../../components/scrollPages/Reviews";
import CommentAttach from "../../components/scrollPages/CommentAttach";
import BlogCategory from "../../components/blog/BlogCategory";

function SingleBlogView() {
  const { blogId } = useParams();
  const blogs = blogList.find((blog) => blog.id === parseInt(blogId));

  return (
    <div className="">
      {blogs ? (
        <div className="section-container py-5 md:flex">
          <div className=" md:w-[70%] space-y-7">
            <div className="">
              <h3 className="md:text-text-4xl text-[1.5rem] text-black  capitalize font-semibold">
                {blogs.by}
              </h3>
            </div>
            <div className="flex items-center text-xs space-x-3">
              <span className="flex gap-2 items-center ">
                {" "}
                <img src={img1} alt="" />
                Determined-poitras
              </span>
              <span className="flex gap-2 items-center">
                <img src={img2} alt="" />
                Jan 24, 22023
              </span>
              <span className="flex gap-2 items-center">
                <img src={img3} alt="" />
                20 Comments
              </span>
            </div>
            <img src={blogs.image} className="w-full rounded-3xl" alt="" />
            <div className="md:text-sm text-xs">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                facilisis faucibus odio arcu duis dui, adipiscing facilisis.
                Urna, donec turpis egestas volutpat. Quisque nec non amet quis.
                Varius tellus justo odio parturient mauris curabitur lorem in.
                Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed faucibus
                bibendum augue id cras purus. At eget euismod cursus non.
                Molestie dignissim sed volutpat feugiat vel enim eu turpis
                imperdiet. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit. Cras facilisis faucibus odio arcu duis dui, adipiscing
                facilisis. Urna, donec turpis egestas volutpat. Quisque nec non
                amet quis. Varius tellus justo odio parturient mauris curabitur
                lorem in. Pulvinar sit ultrices mi ut eleifend luctus ut. Id sed
                faucibus bibendum augue id cras purus.
              </p>
            </div>
            <div className="text-xs flex gap-2">
              <span></span>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">Free couses</button>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">Marketing</button>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">Idea</button>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">LMS</button>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">LearnPress</button>
              <button className="text-dark_gary bg-white_gary p-2 font-semibold">Instructor</button>

            </div>
            {/* Nexr previw articles */}
            <div className="grid grid-cols-2 gap-2">
              <div className="border gap-5 flex p-5 justify-center rounded-md">
                <div className="flex items-center">
                  <button className="border p-2 rounded-md bg-white_gary"><MdOutlineNavigateBefore /></button>
                </div>
                <div className="flex flex-col">
                  <span className="text-xs">Prev Articles</span>
                  <span className="text-sm font-bold">Best LearnPress WordPress Theme Collection for 2023</span>
                </div>
              </div>
              <div className="border gap-5 flex p-5 justify-center rounded-md">
                
                <div className="flex flex-col">
                  <span className="text-xs">Prev Articles</span>
                  <span className="text-sm font-bold">Best LearnPress WordPress Theme Collection for 2023</span>
                </div>
                <div className="flex items-center">
                  <button className="border p-2 rounded-md bg-white_gary"><MdOutlineNavigateNext /></button>
                </div>

              </div>
            </div>
            {/* Nexr previw articles */}
            <Reviews/>
            <CommentAttach/>
          </div>
          {/* ==== w-70% ends */}
          <div className="md:w-[30%] ps-5">
      <BlogCategory 
      />
    </div>

        </div>
      ) : (
        <span className="h-screen section-container flex justify-center items-center">
          no data
        </span>
      )}
    </div>
  );
}

export default SingleBlogView;
