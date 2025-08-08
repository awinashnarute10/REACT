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
 *      -Img
 *      -Res name, star rating, cuisines, est delievery time
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

//Styling for rest card
const styleCard = {
    backgroundColor: "#f0f0f0",
    
}

//rest card for body
const RestaurantCard = () =>{
  return (
    // or style = {{backgroundcolor:"gray"}} style expects object in jsx
    <div className="res-card" style={styleCard}> 
    <img className="res-logo" src="https://b.zmtcdn.com/data/pictures/chains/1/50691/ecfdc75d21bd7cd9d880f05c8382bc65.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A"></img>
      <h3>Rahamatuhlha</h3>
      <h4>Biryani, North Indian, Asian</h4>
      <h4>3.2 stars</h4>
      <h4>38 minutes</h4>
    </div>
  );
};

//Body
const Body = () => {
    return (
          <div className="body">
            <div className="search">
               Search
            </div>
            <div className="res-container">
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
                <RestaurantCard/>
            </div>
          </div>
    );
};

// The main div 
const Applayout = () =>{
    return (
        <div className="app">
           <Header/>
           <Body/>
        </div>
        
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout/>);