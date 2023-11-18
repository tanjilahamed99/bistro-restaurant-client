import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard/Dashboard";
import Carts from "../Pages/Dashboard/Carts/Carts";
import AllUsers from "../Pages/Dashboard/AllUser/AllUsers";
import PrivateRoute from "./PrivateRoute";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/shop',
                element: <OurShop></OurShop>
            },
            {
                path: '/menu',
                element: <Menu></Menu>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard/carts',
                element: <PrivateRoute><Carts></Carts></PrivateRoute>
            },
            {
                path: '/dashboard/allUsers',
                element: <PrivateRoute><AllUsers></AllUsers></PrivateRoute>
            },
        ]
    }
])

export default Router;