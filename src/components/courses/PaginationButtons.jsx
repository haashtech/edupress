import React from "react";
import ReactPaginate from "react-paginate";
import { BsChevronBarLeft, BsChevronBarRight } from "react-icons/bs";
import { motion } from "framer-motion";
function PaginationButtons({ setCurrentPage, currentPage, totalPages }) {
    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
      };
  const paginationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      transition: { type: "spring", stiffness: 260, dumping: 20,duration:0.5 },
      opacity: 1,
      y: 0,
    },
  };
  const showNextButton = currentPage !== totalPages - 1;
  const showPrevButton = currentPage !== 0;
  return (
    <div className="">
      <motion.div variants={paginationVariants} initial="hidden" animate="visible">
      <ReactPaginate
        breakLabel={<span className="mr-4">...</span>}
        nextLabel={
            showNextButton ? (
          <span className="w-10 h-10 flex justify-center items-center rounded-full border">
            <BsChevronBarRight />
          </span> 
            ) : null
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={1}
        pageCount={totalPages}
        previousLabel={
            showPrevButton ?( 
          <span className="w-10 h-10 flex justify-center items-center rounded-full border">
            <BsChevronBarLeft />
          </span>):null
        }
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mt-8 gap-2"
        pageClassName="w-10 h-10 flex justify-center items-center rounded-full border cursor-pointer"
        activeClassName="w-10 h-10 flex justify-center items-center rounded-full bg-black text-white font-bold"
      />
      </motion.div>
    </div>
  );
}

export default PaginationButtons;
