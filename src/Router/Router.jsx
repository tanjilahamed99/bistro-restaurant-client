import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import OurShop from "../Pages/OurShop/OurShop";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path: '/shop',
                element:<OurShop></OurShop>
            },
            {
                path: '/menu',
                element:<Menu></Menu>
            }
        ]
    }
])

export default Router;