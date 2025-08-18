import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//Body
const Body = () => {
    const [resListState, setresListState] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8396589&lng=74.61125129999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setresListState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    // first render itll show Loading 
    if (resListState.length === 0) {
        return (
            <Shimmer/>   // shimmer ui till data is not fetched
        )
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button CLicked");
                    setresListState(resListState.filter((restaurant) => restaurant.info.avgRating > 4.6))

                }}>Top Rated Restaurants</button>

            </div>
            <div className="res-container">
                {resListState.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;