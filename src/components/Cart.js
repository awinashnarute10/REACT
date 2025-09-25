import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemsList from "./ItemsList";

const Cart = () => {

    // subscribing to the store using selectore
    const cardItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());  // this action makes the items.lenght = 0  therefore clearing the cart
    }

    return (
        <div className="font-bold text-center p-4 m-4">
            <h1 className="font-bold text-2xl">Cart</h1>

            <div><button className="bg-black text-white p-2 m-2 rounded-lg cursor-pointer active:scale-95 hover:bg-gray-800"
                onClick={handleClearCart}>
                Clear Cart
            </button></div>


            <div className="w-6/12 mx-auto font-light">
                {cardItems.length === 0 && <h2>Your Cart is Empty!! Add Something!</h2>}
                <ItemsList items={cardItems} />
            </div>
        </div>
    );
};

export default Cart;