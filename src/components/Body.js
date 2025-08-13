import RestaurantCard from "./RestaurantCard"; // default import 
import resList from "../utils/mockData";

//Body
const Body = () => {
    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button CLicked");
                    // filter logic so that when this btn is clicked is only shows restaurant with rating>4.5
                    resList = resList.filter( // 2 problems here resList is not defined here but even if it was defined in this file there wouldnt be any change in ui because after this only the value of relist will change but the DOM wont re render so ui wont change 
                        (restaurant)=>restaurant.info.avgRating>4.6
                    );
                    console.log(resList);
                }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">
               { resList.map((restaurant)=>(
                    <RestaurantCard key={restaurant.info.id} resData = {restaurant}/>  
                ))}
            </div>
        </div>
    );
};

export default Body;