import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Food ALix(food ordering) Website
 * 
 * Header
 *  -Logo
 *  -Nav Items
 * Body
 *  -Search Bar
 *  -Restaurant Container
 *    -Restaurant Card
 *      -Img
 *      -Res name, star rating, cuisines, est delievery time
 * Footer
 *  -Copyright
 *  -Links
 *  -Address
 *  -Contact
 */

//Header
const Header = () => {
    return (
        <div className="header">
            <div className="logo">
                <img src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};

//Styling for rest card
const styleCard = {
    backgroundColor: "#f0f0f0",

}

//rest card for body
const RestaurantCard = (props) => { // in props its like {resData: resObj} 
   const {resData} = props;  // here it means resData = resData inside of props therefore indireclty resData = resObj
    return (
        <div className="res-card" style={styleCard}>
            <img className="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+resData.info.cloudinaryImageId}></img> {/**Dynamic img*/}
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4> {/* here .join joins all the strings in array cuisines with , between */}
            <h4>{resData.info.avgRating}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.sla.slaString}</h4>
        </div>
    );
};

const resObj =
{
    "info": {
        "id": "426776",
        "name": "Theobroma",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2025/8/3/8086c92c-d573-4d83-b524-06530355f773_426776.JPG",
        "locality": "7th Block",
        "areaName": "Koramangala",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Desserts",
            "Bakery",
            "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "1040",
        "avgRatingString": "4.6",
        "totalRatingsString": "6.4K+",
        "sla": {
            "deliveryTime": 20,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "15-20 mins",
            "lastMileTravelString": "1.3 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2025-08-10 23:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Desserts.png"
                            }
                        },
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹290"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {
        "context": "seo-data-f09b1f11-2b3f-4c1a-b573-e7abd25c97fb"
    },
    "cta": {
        "link": "https://www.swiggy.com/city/bangalore/theobroma-7th-block-koramangala-rest426776",
        "type": "WEBLINK"
    }
};


//Body
const Body = () => {
    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                <RestaurantCard
                    resData = {resObj}
                />
            </div>
        </div>
    );
};

// The main div 
const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>

    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Applayout />);