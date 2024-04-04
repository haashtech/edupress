import { useEffect, useState } from "react";
import { coursesList } from "./CourseList"; // Import the coursesList array

const useDataFetcher = () => {
  const totalPages = Math.ceil(coursesList.length / 6); // Calculate total pages based on the number of items per page
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Fetch data function replaced with setting pages from the coursesList array
    const startIndex = currentPage * 6;
    const endIndex = Math.min((currentPage + 1) * 6, coursesList.length);
    const result = coursesList.slice(startIndex, endIndex);
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

export default useDataFetcher;
