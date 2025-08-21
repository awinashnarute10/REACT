import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";



// The main div 
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>

    );
};

//Creating router paths 
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout/>,
        errorElement: <Error/>
    },
    {
        path: "/about",
        element: <About/>
    },
    {
        path: "/contact",
        element: <Contact/>
    }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />); // no need to render Applayout as it is already inside appRouter