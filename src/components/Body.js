import RestaurantCard from "./RestaurantCard"; 
import resList from "../utils/mockData";
import {useEffect, useState } from "react";

//Body
const Body = () => {
    // at the beggining the resliststate is empty 
    const[resListState, setresListState] = useState([]);

    // useEffect hook used for rendering once after the original ui is rendered to fetch data and render again
   useEffect(()=>{
    fetchData();
   }, [])

    const fetchData = async () => {
        // fetch from swiggy api
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8396589&lng=74.61125129999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // convert data into json
        const json = await data.json();


        //  set the resListState to array from the api and after this is set the ui will render again
        setresListState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    // first render itll show Loading 
    if(resListState.length===0){
        return(
            <h1>Loading......</h1>
        )
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    console.log("Button CLicked");
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