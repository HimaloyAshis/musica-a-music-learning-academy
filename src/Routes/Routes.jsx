import { Router, createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorElement from "../pages/ErrorElement/ErrorElement";
import Class from "../pages/ClassPage/Class";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Dashboard from "../LayOut/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Instructors from "../pages/Dashboard/Instructors/Instructors";
import AllUser from "../pages/Dashboard/AllUser/AllUser";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import InstructorPage from "../pages/InstructorPage/InstructorPage";
import AllSelectedClassySt from "../pages/Dashboard/AllSelectedClassBySt.jsx/AllSelectedClassySt";



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
                element:<PrivateRoute><Class></Class></PrivateRoute>,
            },
            {
                path:'/instructors',
                element:<InstructorPage></InstructorPage>
            },
            {
                path:'/login',
                element:<Login></Login>,
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>,
            },
            
        ]

    },
    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'instructors',
                element:<Instructors></Instructors>
            },
            {
                path:"allUser",
                element:<AllUser></AllUser>
            },
            {
                path:'allClass',
                element:<AllClasses></AllClasses>
            },
            {
                path:'selectedClass',
                element:<AllSelectedClassySt></AllSelectedClassySt>
            }
        ]
    }
   
    
])

export default router


