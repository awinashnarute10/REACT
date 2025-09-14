import { LOGO_URL } from "../utils/constants";
import { use, useState } from "react";
import { Link } from "react-router-dom"; // Link from react router 
import useOnlineStatus from "../utils/useOnlineStatus";

//Header
const Header = () => {

    const [btnNameReact, setbtnNameReact] = useState("Login");

    const isOnline = useOnlineStatus();


    return (
        <div className="header">
            <div className="logo">
                <img src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Online Status:{isOnline ? " ✅": " ❌"}</li>  {/** conditional rendering for online status */}
                    <li><Link to ="/">Home</Link></li>  {/** using link instead of anchor tag so that only the compnent renders and the page doesnt reload therefore making the states preserved and the page fast */}
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to= "/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login" onClick={() => {  // toggle function to change login to logout and vice versa 
                        btnNameReact === "Login" ? setbtnNameReact("Logout") : setbtnNameReact("Login");
                    }}>
                        {btnNameReact}
                    </button>
                </ul>
            </div>
        </div>
    );
};

export default Header;