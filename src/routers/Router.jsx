import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Root from "../layout/Root";
import Courses from "../pages/courses/Courses";
import SingleCourseView from "../pages/courses/SingleCourseView";
import Blogs from "../pages/blogs/Blogs";
import SingleBlogView from "../pages/blogs/SingleBlogView";

const router = createBrowserRouter(
    [
        {
            path:"/",
            element:<Root/>,
            children: [
                {
                    index:true,
                    path:"/",
                    element: <Home/>
                },
                {
                    path:"/about",
                    element: <About/>
                },
                {
                    path:"/courses",
                    element: <Courses/>
                },
                {
                    path:"/courses/:courseId",
                    element: <SingleCourseView/>
                }
                ,
                {
                    path:"/blogs",
                    element: <Blogs/>
                },
                {
                    path:"/blogs/:blogId",
                    element: <SingleBlogView/>
                }
                ,
            ]

        }
    ]
)

export default router;