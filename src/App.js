import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

const Grocery = lazy(() => import("./components/Grocery"));  // this importing also takes time

// The main div 
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />  {/** Here all the children routes will be rendered  */}
        </div>

    );
};

//Creating router paths 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [   // creating children routes
            {
                path: "/",
                element: <Body />,
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading Grocery Items.....</h1>}><Grocery /></Suspense>      // lazy loading
                // here suspense is used as the grocery importing above takes time and so rendering before it loads can cause problem therefore it provides a fallback
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // no need to render Applayout as it is already inside appRouter