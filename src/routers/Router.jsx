import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Root from "../layout/Root";
import Courses from "../pages/courses/Courses";
import SingleCourseView from "../pages/courses/SingleCourseView";
import Blogs from "../pages/blogs/Blogs";
import SingleBlogView from "../pages/blogs/SingleBlogView";
import ContactUs from "../pages/contactus/ContactUs";
import Faq from "../pages/faq/Faq";
import Error from "../pages/error/Error";
import Register from "../pages/register/Register";

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
                },
                {
                    path:"/contactus",
                    element: <ContactUs/>
                },
                {
                    path:"/faq",
                    element: <Faq/>
                },
                {
                    path:"/register",
                    element: <Register/>
                },
                {
                    path:"*",
                    element: <Error/>
                },
            ]

        }
    ]
)

export default router;