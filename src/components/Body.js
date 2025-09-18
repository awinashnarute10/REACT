import RestaurantCard ,{withOpenLabel}from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { SWIGGY_URL } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";

//Body
const Body = () => {
    const [resListState, setresListState] = useState([]);

    // state variable for text inside search bar 
    const [searchText, setSearchText] = useState("");

    //copy of the resListState so that the original array doesnt change when filtered and set so that we can search again and again
    const [filteredResList, setFilteredResList] = useState([]);

    //here we will use the HOC to make this component
    const RestaurantCardOpen = withOpenLabel(RestaurantCard);

    // for fetching and showing data after first render 
    useEffect(() => {
        fetchData();
    }, [])

    // live search 
    useEffect(() => {
        if (!Array.isArray(resListState)) return;

        if (searchText.trim() === "") {
            return setFilteredResList(resListState);  // here we cant directly use filteredrestaurant because it may have been changed or filtered so the best way to return all restaurant is to return the resListState
        }

        else {
            setFilteredResList(resListState.filter((res) => {
                return res.info.name.toLowerCase().includes(searchText.toLowerCase());  // as the searText changes the this gets called and the filterrestaurant is updated and rendered everytime

            }))
        }
    }, [searchText, resListState]);

    // function to fetch data from swiggy api
    const fetchData = async () => {

        const data = await fetch(SWIGGY_URL);

        const json = await data.json();
        
        setresListState(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); // giving the same list of restaurants as resListState
    }

    // check for online status and render if offline
    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false){
        return(
            <h1>
                Looks like you are offline
            </h1>
        );
    };

    return !Array.isArray(resListState) || resListState.length === 0? <Shimmer /> : (    // ternary operator for conditional rendering 
        <div className="body">
            <div className="filter m-4 p-4">

                {/** Search Bar */}
                <input className="searchBar border border-solid border-black shadow-lg shadow-gray-400"   
                value={searchText} 
                onChange={(e) => { setSearchText(e.currentTarget.value) }}>
                    </input>  {/** here taking the input value as a state variable and using setTExt inside onchange to set the text value. The value is now tied to state variable text*/}

                {/** Search btn to filter the restaurantListState according to user input */}
                <button className="search-btn px-3 py-1 bg-sky-50 hover:bg-sky-100 rounded-lg cursor-pointer" onClick={() => {
                    setFilteredResList(resListState.filter((res) => {
                        return res.info.name.toLowerCase().includes(searchText.toLowerCase());     // here we are filtering on the basis if the searchText the user that inputs matches or is found inside the restaurants name and is made case insensitive
                    }))
                }
                }>Search</button>

                {/** Top rated restaurant button */}
                <button className="filter-btn px-4 py-1.5 bg-sky-50 m-2 hover:bg-sky-100 rounded-lg cursor-pointer" onClick={() => {
                    console.log("Button CLicked");
                    setFilteredResList(resListState.filter((restaurant) => restaurant.info.avgRating > 4.6)) // the filtered restaurants from resListStsate will be set to filteredResList so that the original resLIststate wont change and can be used again and again without losing the list of restaurants
                }}>Top Rated Restaurants</button>
            </div>

                {/** the main area where cards are rendered */}
            <div className="res-container flex flex-wrap items-stretch">
                {filteredResList.map((restaurant) => (
                    <Link to={"/restaurant/"+restaurant.info.id} key={restaurant.info.id}>  {/** the restaurant.info.id is provided from here */}

                        {/**  this checks from api if restaurant is open(boolean) then enhanced component is rednered or else normal one*/}
                         {restaurant.info.isOpen ? 
                         <RestaurantCardOpen resData={restaurant}/> : 
                         <RestaurantCard resData={restaurant} />
                         }
                        
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Body;