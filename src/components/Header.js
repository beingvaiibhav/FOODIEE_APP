import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

function Header(){
    const onlineStatus = useOnlineStatus();

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);

    return(
        <div className="flex justify-between p-4 bg-orange-400 drop-shadow-xl">
            <div>
                <h1 className="text-xl font-bold text-indigo-800 drop-shadow-xl
                cursor-pointer"><Link to='/'>Foodiee.com</Link></h1>
            </div>
            <div className="md:hidden m-2 text-xl font-bold cursor-pointer">
                <CiMenuBurger />
            </div>
            <ul className="md:flex hidden font-semibold cursor-pointer ">
                <li className="mr-6 drop-shadow-lg">Online Status {onlineStatus ?"🟡":"🔴"}</li>
                <li className="mr-6"><Link to='/'>Home</Link> </li>
                <li className="mr-6"><Link to='cart'>Cart: {cartItems.length} items</Link></li>
                <li className="mr-6"><Link to='/about'>About US</Link></li>
                <li className="mr-4"><Link to='/contact'>Contact US</Link></li>
            </ul>
        </div>
    )
}
export default Header;