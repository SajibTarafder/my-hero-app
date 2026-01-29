import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import App from '../pages/App/App';
import BookDetails from '../pages/BookDetails/BookDetails';
import Installation from '../pages/Installation/Installation';
export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index:true,
           loader:()=>fetch('heroData.json'),
            path:"/",
            Component:Home
        },
        {
          
        path:'/app',
        loader: () => fetch('heroData.json'),
        Component:App
        },
        {
          path:'/bookDetails/:id',
           loader:()=>fetch('heroData.json'),
          Component:BookDetails,
        },
        {
            
          path:'/installation',
           loader:()=>fetch('heroData.json'),
          Component:Installation
        },
        
    ]
  },
]);