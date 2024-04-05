import { useState, useEffect } from "react";
import { review } from "./CourseList"; // Import the review array

const useReviewFetcher = () => {
  const totalPages = Math.ceil(review.length / 3); // Now showing 3 reviews per page
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const startIndex = currentPage * 3;
    const endIndex = Math.min((currentPage + 1) * 3, review.length);
    const result = review.slice(startIndex, endIndex);
    setPages(result);
    setLoading(false);
  }, [currentPage]);

  return {
    loading,
    pages,
    totalPages,
    currentPage,
    setCurrentPage,
  };
};

export default useReviewFetcher;
