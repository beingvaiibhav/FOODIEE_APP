import { useDispatch, useSelector } from "react-redux";
import ResturantItems from "./ResturantItems"
import { clearCart, removeItems } from "../cartStore/cartSlice";

function Cart(){
    const dispatch = useDispatch();
    const cartItems = useSelector((store)=>store.cart.items);
    
    const clearItem=()=>{
        dispatch(clearCart());
    }
    
    return(
        <div className="text-center m-4 p-4">
            <h1 className=" text-2xl font-bold">Cart Page</h1>
            <div className="w-6/12 m-auto">
                { (cartItems.length != 0) && (<button className="p-2 m-2 bg-black text-white rounded-lg cursor-pointer"
                   onClick={clearItem} >
                    Clear Cart
                </button>) }
                {cartItems.length === 0 && (
                    <h1 className="text-2xl m-40">Cart Items is Empty</h1>
                ) 
                }
                <ResturantItems items={cartItems} />
            </div>
        </div>
    )
}
export default Cart;