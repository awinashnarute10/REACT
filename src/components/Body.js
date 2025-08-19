import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

//Body
const Body = () => {
    const [resListState, setresListState] = useState([]);

    // state variable for text inside search bar 
    const [searchText, setSearchText] = useState("");

    //copy of the resListState so that the original array doesnt change when filtered and set so that we can search again and again
     const[filteredResList, setFilteredResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.8396589&lng=74.61125129999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json = await data.json();

        setresListState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // giving the same list of restaurants as resListState
    }

    return resListState.length === 0 ? <Shimmer /> : (    // ternary operator for conditional rendering 
        <div className="body">
            <div className="filter">
                    
                    {/** Search Bar */}
                   <input className="searchBar" value={searchText} onChange={(e)=>{setSearchText(e.currentTarget.value)}}></input>  {/** here taking the input value as a state variable and using setTExt inside onchange to set the text value. The value is now tied to state variable text*/}

                   {/** Search btn to filter the restaurantListState according to user input */}
                   <button className="search-btn" onClick={()=>
                    {
                         setFilteredResList(resListState.filter((res)=> {
                          return  res.info.name.toLowerCase().includes(searchText.toLowerCase());     // here we are filtering on the basis if the searchText the user that inputs matches or is found inside the restaurants name and is made case insensitive
                         }))
                    }
                   }>Search</button>

                <button className="filter-btn" onClick={() => {
                    console.log("Button CLicked");
                    setFilteredResList(resListState.filter((restaurant) => restaurant.info.avgRating > 4.6)) // the filtered restaurants from resListStsate will be set to filteredResList so that the original resLIststate wont change and can be used again and again without losing the list of restaurants
                }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {filteredResList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                ))}
            </div>
        </div>
    );
};

export default Body;