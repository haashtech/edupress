import React, { useState } from 'react'
import PaginationButtons from '../../components/courses/PaginationButtons'
import useBlogFetecher from '../../customeHooks/useBlogFetecher';
import BlogCard from '../../components/blog/BlogCard';
import BlogGridView from '../../components/blog/BlogGridView';
import BlogListView from '../../components/blog/BlogListView';

function Blogs() {
    const { loading, pages, totalPages, currentPage, setCurrentPage } =
    useBlogFetecher();

    const [activeSection, setActiveSection] = useState("BlogGridView");

    const handleClick = (section) => {
      setActiveSection(section);
    };
  
    const renderSection = (key, item) => {
        switch (activeSection) {
          case "BlogGridView":
            return <BlogGridView key={key} item={item} />;
          case "BlogListView":
            return <BlogListView key={key} item={item} />;
          default:
            return null;
        }
      };
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
     <img src="/images/home/menu.png" alt=""  onClick={() => handleClick('BlogGridView')} />
     <img src="/images/home/filter.png" alt=""  onClick={() => handleClick('BlogListView')} />
       </div>
       </div>
       {pages.map((item, idx) => (
         renderSection(idx, item)
       ))}

       <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
       />
     </div>
     {/* <div className="md:w-[30%] ps-5">

       <CourseCategory 
       
       />
     </div> */}
   </div>
  </div>
  )
}

export default Blogs