import { SWIGGY_MENU_URL } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

    
    const {resId} = useParams();

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

    if(!menuInfo) return <Shimmer />

    const{id, name} = menuInfo[2]?.card?.card?.info;

    const{itemCards} = menuInfo[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    console.log(itemCards);

    return (
        <div>
            <h1>Menu</h1>
            <h2>{name}</h2>
            <ul>
              {itemCards? (itemCards.map((item) => { // optional rendering 
                   return  <li key={item.card.info.id}>{item.card.info.name}-  Rs {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                })) : <Shimmer/> } 
                
            </ul>
        </div>
    )
}

export default RestaurantMenu;