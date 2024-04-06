import React, { useState } from 'react'
import PaginationButtons from '../../components/courses/PaginationButtons'
import useBlogFetecher from '../../customeHooks/useBlogFetecher';

// imported  components
import BlogGridView from '../../components/blog/BlogGridView';
import BlogListView from '../../components/blog/BlogListView';

// imported icons
import { FaListUl, FaThList } from "react-icons/fa";
import BlogCategory from '../../components/blog/BlogCategory';

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
            return <BlogGridView key={key} pages={pages} />;
          case "BlogListView":
            return <BlogListView key={key} pages={pages} />;
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
     
     <span className='lg:tooltip' data-tip="This will change the display view to listing"><FaThList className={`${activeSection === "BlogGridView" ? "text-primary" : ""} cursor-pointer hover:scale-95 transition-all lg:tooltip `} onClick={() => handleClick('BlogGridView')} /></span>
     <span className='lg:tooltip' data-tip="This will change the display view to griding"><FaListUl className={`${activeSection === "BlogListView" ? "text-primary" : ""} cursor-pointer hover:scale-95 transition-all lg:tooltip `} onClick={() => handleClick('BlogListView')} /></span>
       </div>
       </div>
       {/* {pages.map((item, idx) => (
         renderSection(idx, item)
       ))} */}
      {renderSection( pages)}

       <PaginationButtons
        totalPages={totalPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
       />
     </div>
     <div className="md:w-[30%] ps-5">
      
       <BlogCategory 
       />

     </div>
   </div>
  </div>
  )
}

export default Blogs