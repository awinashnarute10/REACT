import { CDN_URL } from "../utils/constants"; // named import inside curly brackets



//rest card for body
const RestaurantCard = (props) => { 
    const { resData } = props;  
    const{name, cuisines, avgRating, costForTwo, sla:{slaString}, cloudinaryImageId} = resData?.info; 
    return (
        // we can also make dynamic classes by using [] in tailwind
        <div className="res-card flex flex-col justify-between m-4 p-4 w-[250px] rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-300 hover:scale-95 transition-transform duration-300">   
            <img className="res-logo rounded-lg h-40 object-cover" src={CDN_URL + resData.info.cloudinaryImageId}></img> 
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4 className="text-gray-500">{cuisines.join(", ")}</h4> 
            <h4 className="text-gray-500">{avgRating} stars</h4>
            <h4 className="text-gray-500">{costForTwo}</h4>
            <h4 className="text-gray-500">{slaString}</h4>
        </div>
    );
};

export default RestaurantCard; // default export