import RestaurantCard from "./RestaurantCard"; // default import 
import resList from "../utils/mockData";
import { use, useState } from "react";

//Body
const Body = () => {
    // Destructring the useState into statevariable and statesetter 
    const[resListState, setresListState] = useState(resList);
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button CLicked");
                    // filtering the resListState and changing the state variable using statesetter therefore this compnent can be re rendered 
                    setresListState(resListState.filter((restaurant)=>restaurant.info.avgRating>4.6))
                    
                }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">
               { resListState.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>  
                ))}
            </div>
        </div>
    );
};

export default Body;