import React from "react";
import ReactDOM from "react-dom/client";
 
/**
 * Food ALix(food ordering) Website
 * 
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search Bar
 *  -Restaurant Container
 *    -Restaurant Card
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

//Header
const Header = () => {
    return(
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};



// The main div 
const Applayout = () =>{
    return (
        <div className="app">
           <Header/>
        </div>
        
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);