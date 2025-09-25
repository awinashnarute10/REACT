import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";
const ItemsList = ({ items }) => {

    // dispatcher
    const dispatch = useDispatch();

    // here the dispatcher dispatches the addItems action with "pizza" as a payload that calls the reducer fn that  pushes "pizza" into items of cartslice 
    const handleClick = (item) => {
          dispatch(addItems(item));    //  here the whole item(info about each dish) inside of item card is dispatched as action payload
          console.log(item);
    };

    return (
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <div>
                            <span className="py-2">{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.defaultPrice / 100 || item.card.info.price / 100}</span>
                        </div>
                        

                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                    <div className=" w-32 h-32  overflow-hidden rounded-lg relative">
                        <img src={CDN_URL + item.card.info.imageId} className="w-full h-full object-cover"></img>
                        <button className="absolute bottom-1 left-1/2 -translate-x-1/2 bg-white text-green-600 text-xs px-3 py-1 rounded shadow-md hover:bg-gray-100"
                         onClick={() => handleClick(item)}>
                            Add+
                        </button>
                    </div>

                </div>
            ))}
        </div>
    )
};

export default ItemsList;