import React from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import MainLayout from '../LayOut/MainLayout';
import Home from '../Pages/Home/Home';
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        }
      ]
    },
  ]);
  export default router;