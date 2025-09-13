import { useEffect, useState} from "react";
import { SWIGGY_MENU_URL } from "./constants";


//  custom hook to fetch menu info
const useRestaurantMenu = (resId) => {
 
    const [menuInfo, setMenuInfo] = useState(null);

   useEffect(() => {
     fetchMenu();
   }, []);

   const fetchMenu = async () => {
        const data = await fetch(SWIGGY_MENU_URL+resId);
        const json = await data.json();

        setMenuInfo(json?.data?.cards||[]);
   }

   return menuInfo;
};

export default useRestaurantMenu;

