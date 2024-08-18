import { createBrowserRouter } from "react-router-dom"
import Home from "../Pages/Home/Home/Home";
import Main from "../layouts/Main";
import Error from "../Pages/Error/Error";
import Booking from "../Pages/Home/Booking/Booking";
import Order from "../Pages/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import PrivateRoutes from "./PrivateRoutes";




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'bookings/:id',
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://car-servicings-9paq.vercel.app/bookings/${params.id}`)
            },
            {
                path: 'order',
                element: <PrivateRoutes><Order></Order></PrivateRoutes>,
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'profile',
                element: <Profile></Profile>
            }

        ]
    },
    {
        path: '*',
        element: <Error></Error>,
    }
]);

export default router;