import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Class from "../pages/ClassPage/Class";
import Instructors from "../pages/Instructors/Instructors";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard/Dashboard";

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
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>,
            }
        ]

    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:''
            }
        ]
    }
])

export default router