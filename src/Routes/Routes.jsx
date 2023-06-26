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
import PaymentHistory from "../pages/ClassPage/PaymentSucessfulClass/PaymentHistory";
import PrivateDashboard from "./PrivateRoute/PrivateDashboard";



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
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'instructor',
                element:<Instructors></Instructors>
            },
            {
                path:"allUser",
                element:<PrivateDashboard><AllUser></AllUser></PrivateDashboard>
            },
            {
                path:'allClass',
                element:<PrivateDashboard><AllClasses></AllClasses></PrivateDashboard>
            },
            {
                path:'selectedClass',
                element:<PrivateDashboard><AllSelectedClassySt></AllSelectedClassySt></PrivateDashboard>
            },
            {
                path:'payment/:id',
                element:<PrivateDashboard><Payment></Payment></PrivateDashboard>,
                loader:({params})=> fetch(`https://music-instrument-learning-server-himlaoy.vercel.app/student/favClass/${params.id}`)
            },
            {
                path:'createdClass',
                element:<PrivateDashboard><CreatedClass></CreatedClass></PrivateDashboard>
            },
            {
                path:'updateClass/:id',
                element:<PrivateDashboard><UpdateCreateClass></UpdateCreateClass></PrivateDashboard>,
                loader:updateClass
            },
            {
                path:'paySuccessClass',
                element:<PrivateDashboard><PaySuccessClass></PaySuccessClass></PrivateDashboard>
            },
            {
                path:'paymentHistory',
                element:<PrivateDashboard><PaymentHistory></PaymentHistory></PrivateDashboard>
            }
        ]
    }
   
    
])

export default router


