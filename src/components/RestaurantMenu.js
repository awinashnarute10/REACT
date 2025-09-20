import { SWIGGY_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./ResaturantCategory";

const RestaurantMenu = () => {


    const { resId } = useParams();

    //created a custom hook for this code 
    // const [menuInfo, setMenuInfo] = useState([]);

    // useEffect(() =>{
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {

    //     const data = await fetch(SWIGGY_MENU_URL+resId+"&catalog_qa=undefined&submitAction=ENTER");  // here the resID comes from body and ists defined in App as /:resId meanning its dynamic
    //     const json = await data.json();

    //     setMenuInfo(json?.data?.cards || []);
    // }

    const menuInfo = useRestaurantMenu(resId);  // custom hook

    const [showIndex, setShowIndex] = useState(null);

    if (!menuInfo) return <Shimmer />

    const { id, name, cuisines, costForTwoMessage } = menuInfo[2]?.card?.card?.info;

    const { itemCards } = menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    // console.log(itemCards);


    const categories = menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

    console.log(categories);

    return (
        <div className="text-center">
            <h2 className="font-bold my-6 text-2xl">{name}</h2>

            <p className="font-bold text-lg">
                {cuisines.join(", ")}-{costForTwoMessage}
            </p>

            {/**Accordion Category */}
            {categories.map((category, index) => ( 
                 <RestaurantCategory key={category?.card?.card?.title}
                  data = {category?.card?.card} 
                 showItems = {index===showIndex} 
                 setShowIndex = {() => setShowIndex(showIndex===index ? null : index)}/> 
            ))} {/** lifting the state and controlling the child component */}
        </div>
    )
}

export default RestaurantMenu;