import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data }) => {
    // console.log(data);

    const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
        setShowItems(!showItems);
    }

    return (
        <div>

            <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 shadow-lg ">

                {/**Accordion Header(title) */}
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    {showItems ? <span>🔼</span> : <span>🔽</span>}
                </div>


                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showItems ? "max-h-screen" : "max-h-0"}`} >
                    <ItemsList items={data.itemCards} />
                </div>
            </div>

        </div>
    );
};

export default RestaurantCategory;
