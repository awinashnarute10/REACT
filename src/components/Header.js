import { LOGO_URL } from "../utils/constants";
import { use, useContext, useState } from "react";
import { Link } from "react-router-dom"; // Link from react router 
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

//Header
const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const isOnline = useOnlineStatus();

    const {loggedInUser} = useContext(UserContext);   // using/ consuming context in functional components
    // console.log(data);

    // subscribing to the store using a selector
    const cartItems = useSelector((store) => store.cart.items);  //  here the selector variable stores the items in it

    return (
        <div className="flex justify-between bg-pink-50 shadow-lg sm:bg-yellow-50 lg:bg-green-50">
            <div className="logo">
                <img className="w-56" src={LOGO_URL}></img>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online Status:{isOnline ? " ✅": " ❌"}</li>  {/** conditional rendering for online status */}
                    <li className="px-4"><Link to ="/">Home</Link></li>  {/** using link instead of anchor tag so that only the compnent renders and the page doesnt reload therefore making the states preserved and the page fast */}
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to= "/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to= "/grocery">Grocery </Link></li>
                    <li className="px-4">Cart ({cartItems.length})</li>
                    <li className="px-4"><button className="login cursor-pointer" onClick={() => {  // toggle function to change login to logout and vice versa 
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button></li>
                    <li>{btnNameReact==="Logout"? loggedInUser: ""}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;