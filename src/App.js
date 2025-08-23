import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";



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
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }
        ]
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // no need to render Applayout as it is already inside appRouter