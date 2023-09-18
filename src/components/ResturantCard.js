import React from "react";
import { TiLocationOutline } from "react-icons/ti";
import { FaRegStar } from "react-icons/fa";
import { IMAGE_URL } from "../utils/constants";
function ResturantCard(props){
    // const{resturantName,rating} = props;
        const {resData} = props;
        // console.log(resData);
        const {
            cloudinaryImageId,
            name,
            avgRating,
            cuisines,
            costForTwo,
            deliveryTime,
            locality,
          } = resData;
 
 
    return(
        <div className="flex md:flex-wrap">
        <div className="m-5 flex-col justify-start  rounded-xl w-64 hover:drop-shadow-xl cursor-pointer ">
            <div>
                <img className="h-[185.3px] rounded-xl overflow-hidden" src={IMAGE_URL + cloudinaryImageId}></img>
            </div>
            <div className="flex-col text-left ml-2 overflow-x-auto ">
                <h3 className="font-bold text-lg mt-2 text-cyan-1000">{name}</h3>
                <p className="text-cryan-200 flex"><FaRegStar className="mt-1 mr-1 text-orange-600 text-lg"/>{avgRating}</p>
                <p className="text-cryan-200 break-all">{cuisines.join(", ")}</p>
                <p className="text-cryan-200 flex"><TiLocationOutline className="mt-1 mr-1 text-lg" /> {locality}</p>
            </div>
        </div>            
    </div>
    )
}
//Higer Order Function
//Takes input as ResturantCard => Output as PromptedResturantCard 
export const withPromotedLabel = (ResturantCard)=>{
    return(props)=>{
        return(
            <div className="flex" >
                <label className="absolute text-white bg-black w-44 items-start	m-3 p-1 rounded-xl">Opened</label>
                <ResturantCard {...props}/>
            </div>
        )

    }
}
export default ResturantCard;