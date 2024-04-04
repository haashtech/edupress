import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import About from "../pages/Home/About";
import Root from "../layout/Root";
import Courses from "../pages/courses/Courses";

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
                }
            ]

        }
    ]
)

export default router;