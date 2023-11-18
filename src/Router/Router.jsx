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
import AdminRoutes from "./AdminRoutes";
import AddItems from "../Pages/Dashboard/AddItems/AddItems";
import ManageItems from "../Pages/Dashboard/ManageItems/ManageItems";
import UpdateMenu from "../Pages/Dashboard/UpdateMenu/UpdateMenu";

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
                element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path: '/dashboard/addItems',
                element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
            },
            {
                path: '/dashboard/menageItems',
                element: <AdminRoutes><ManageItems></ManageItems></AdminRoutes>
            },
            {
                path: '/dashboard/updateMenu/:id',
                element: <AdminRoutes><UpdateMenu></UpdateMenu></AdminRoutes>
            },
        ]
    }
])

export default Router;