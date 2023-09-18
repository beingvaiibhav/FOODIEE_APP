import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturantCategory from "./ResturantCategory";

function ResturantMenu(){
    // const [showItem,setShowItem] = useState([]);
    const [showIndex,setShowIndex] = useState();

    const {resId} = useParams();

    const resturantInfo = useResturantMenu(resId);
    


    
    if(resturantInfo === null) return <Shimmer/>

    const {name, cuisines,avgRating,costForTwoMessage   } = resturantInfo?.cards[0]?.card?.card?.info;
    const{itemCards,title} = resturantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    const categories = resturantInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=> 
    c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
    // console.log(categories);

    return(
        
        <div className="flex flex-col mx-5 text-center ">
            <h1 className="text-2xl mb-5 mt-4 font-bold">{name}</h1>
            <p className="font-semibold text-slate-500">{cuisines.join(', ')}</p>
            <p className="font-semibold text-slate-500">Rating: {avgRating}</p>
            <p className="font-semibold text-slate-500">{costForTwoMessage}</p>
            <ul>
                <li>
                {
                 categories.map((category,index)=>(
                 <ResturantCategory 
                 key={category.card.card.title}  
                 data={category.card.card} 
                 showItems={index=== showIndex && true}
                 setShowIndex={()=> setShowIndex(index)}
                />))
                }
                </li>
            </ul>
            

        </div>
    )
}
export default ResturantMenu;