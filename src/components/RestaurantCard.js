import { CDN_URL } from "../utils/constants"; // named import inside curly brackets

//Styling for rest card
const styleCard = {
    backgroundColor: "#f0f0f0",

}

//rest card for body
const RestaurantCard = (props) => { 
    const { resData } = props;  
    const{name, cuisines, avgRating, costForTwo, sla:{slaString}, cloudinaryImageId} = resData?.info; 
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={CDN_URL + resData.info.cloudinaryImageId}></img> 
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4> 
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{slaString}</h4>
        </div>
    );
};

export default RestaurantCard; // default export