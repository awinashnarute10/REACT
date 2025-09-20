import { useState } from "react";
import ItemsList from "./ItemsList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    // console.log(data);
    return (
        <div>

            <div className="w-6/12 bg-gray-50 p-4 mx-auto my-4 shadow-lg ">

                {/**Accordion Header(title) */}
                <div className="flex justify-between cursor-pointer" onClick={setShowIndex}>  {/** this state is coming from parent  */}
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    {/* {showItems ? <span>🔼</span> : <span>🔽</span>} */}
                    <span className={`transform transition-transform duration-500 ease-in-out ${showItems ? "rotate-180" : "rotate-0" }`}>
                        🔽 
                    </span>  {/** check this  */}
                </div>


                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${showItems ? "max-h-screen" : "max-h-0"}`} >
                    <ItemsList items={data.itemCards} />
                </div>
            </div>

        </div>
    );
};

export default RestaurantCategory;
