import ResturantItems from "./ResturantItems";
import { useState } from "react";


function ResturantCategory({data ,showItems,setShowIndex}){
    // const [arrow,setArrow] = useState('⬇️')
    // console.log(data);
    function handleClick(){
        setShowIndex()
    }
    // function dropArrow(){
    //     if(arrow === '⬇️'){
    //         setArrow('⬆️')
    //     }else{
    //         setArrow('⬇️')
    //     }
    // }

    return(
        <div>
        <div className="w-6/12 mx-auto my-5 bg-gray-50 shadow-sm p-4" onClick={handleClick}>
            <div className="flex justify-between cursor-pointer" >
                <span className="font-semibold text-lg">{data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
                {/* <span onClick={dropArrow}>{arrow}</span> */}
            </div>
                 
            {showItems && <ResturantItems  items={data.itemCards}/>}
             
            

        </div>
        </div>
    )
}

export default ResturantCategory;