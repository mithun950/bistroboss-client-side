import {
    createBrowserRouter,

  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";

import Home from "../Pages/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Secret from "../Shared/Secret/Secret";
import PrivateRoute from "./PrivateRoute";
import DashBoard from "../Layout/DashBoard";
import Cart from "../Pages/DashBoard/Cart/Cart";
import AllUsers from "../Pages/DashBoard/AllUsers";

 export  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element: <Home></Home>,
        },
        {
          path: "/ourMenu",
          element: <OurMenu></OurMenu>,
        },
        {
           path: '/order/:category',
           element: <Order></Order>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: '/secret',
          element: <PrivateRoute><Secret></Secret></PrivateRoute>,
        },
      ]
    },
    {
      path: "/dashboard",
      element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>,
      children: [
         {
          path: 'cart',
          element: <Cart></Cart>,
         },
        {
          path: 'users',
          element: <AllUsers></AllUsers>,
          
        }
      ]
    }
  ]);