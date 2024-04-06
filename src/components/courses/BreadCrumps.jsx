// Breadcrumbs.jsx

import { Link, useLocation } from "react-router-dom";
import { MdNavigateNext } from "react-icons/md";
import { blogList } from "../blog/BlogLists";

const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x !== '');
  const getTitleFromId = (blogId) => {
    const blog = blogList.find((blog) => blog.id === parseInt(blogId));
    return blog ? blog.by : "";
  };
  return (
    <>
     { pathnames.length > 0 &&
    <div className="flex text-xs items-center bg-slate-100 py-3 section-container">
      <ul className="flex gap-2 ">
       <li key="home">
          <Link to={'/'} className="flex items-center gap-1">Homepage <MdNavigateNext /></Link>
        </li>
        {pathnames.map((name, index) => {
          const breadcrumbPath = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const isBlogId = !isNaN(name);
          return (
            <li key={breadcrumbPath} className="">
              {" "}
              <Link to={breadcrumbPath} className="flex items-center gap-1">{isBlogId ? getTitleFromId(name) : name}<MdNavigateNext /></Link>
            </li>
          );
        })}
      </ul>
    </div>
    }
    </>
  );
};

export default Breadcrumbs;
