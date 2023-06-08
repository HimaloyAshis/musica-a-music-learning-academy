import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Class from "../pages/ClassPage/Class";
import Instructors from "../pages/Instructors/Instructors";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/class',
                element:<Class></Class>,
            },
            {
                path:'/instructors',
                element:<Instructors></Instructors>
            }
        ]

    }
])

export default router