import React, { lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
// import Grocery from "./components/Grocery";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const Grocery = lazy(() => import("./components/Grocery"));  // this importing also takes time

// The main div 
const Applayout = () => {

    const [userName, setUserName] = useState("");

    useEffect(() => {
        {/** mocking api call */ }
        const data = {
            name: "Awinash Narute"
        };

        setUserName(data.name);
    }, [])

    return (
        <Provider store={appStore}>  {/** here we have provided the central store to all the components so that we dont have to import it everytime */}

            <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>  {/** whatever is wrapped inside this provider will have get the value of the context when used  */}
                <div className="app">

                    <UserContext.Provider value={{ loggedInUser: "Awinash" }}>  {/** nested context provider and the innermost context will have the highest priority for whatever it is wrapping */}
                        <Header />
                    </UserContext.Provider>

                    <Outlet />  {/** Here all the children routes will be rendered  */}
                    
                </div>
            </UserContext.Provider>
        </Provider>

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
                element: <Suspense fallback={<h1>Loading Grocery Items.....</h1>}><Grocery /></Suspense>      // lazy loading
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