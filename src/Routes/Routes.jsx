import { createBrowserRouter } from "react-router-dom";
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
import Payment from "../pages/Dashboard/Payment/Payment";
import CreatedClass from "../pages/Dashboard/CreatedClass/CreatedClass";
import UpdateCreateClass from "../pages/Dashboard/updateCreatedClass.jsx/UpdateCreateClass";
import { updateClass } from "../api/UpdateClass";
import PaySuccessClass from "../pages/ClassPage/PaymentSucessfulClass/PaySuccessClass";



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
                path:'instructor',
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
            },
            {
                path:'payment',
                element:<Payment></Payment>
            },
            {
                path:'createdClass',
                element:<CreatedClass></CreatedClass>
            },
            {
                path:'updateClass/:id',
                element:<UpdateCreateClass></UpdateCreateClass>,
                loader:updateClass
            },
            {
                path:'paySuccessClass',
                element:<PaySuccessClass></PaySuccessClass>
            }
        ]
    }
   
    
])

export default router


