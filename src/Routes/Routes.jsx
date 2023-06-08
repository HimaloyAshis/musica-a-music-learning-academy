import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home/Home";
import Main from "../LayOut/Main";
import ErrorElement from "../pages/ErrorElement/ErrorElement";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorElement></ErrorElement>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]

    }
])

export default router