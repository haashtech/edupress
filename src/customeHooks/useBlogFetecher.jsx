import { useEffect, useState } from "react";
import { blogList } from "../components/blog/BlogLists";

const useBlogFetecher = () => {
  const totalPages = Math.ceil(blogList.length / 6); // Calculate total pages based on the number of items per page
  const [loading, setLoading] = useState(true);
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    // Fetch data function replaced with setting pages from the blogList array
    const startIndex = currentPage * 6;
    const endIndex = Math.min((currentPage + 1) * 6, blogList.length);
    const result = blogList.slice(startIndex, endIndex);
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

export default useBlogFetecher;
