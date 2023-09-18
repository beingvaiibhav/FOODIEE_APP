import { useState,useEffect } from "react";
import { MENU_URL } from "../utils/constants";

const useResturantMenu = (resId)=>{
    const [resturantInfo,setResturantInfo] = useState(null);

    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setResturantInfo(json.data)
        // console.log(json.data);

    };

    return resturantInfo;

}
export default useResturantMenu;