import ResturantCard, { withPromotedLabel } from "./ResturantCard";
import { AiOutlineSearch } from "react-icons/ai";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useBody from "../utils/useBody";
import useOnlineStatus from "../utils/useOnlineStatus";



function Body(){   
    let{listOfResturant,filterResturant,setFilterResturant}= useBody();

    const onlineStatus = useOnlineStatus();
    const PromptedResturantCard  = withPromotedLabel(ResturantCard);    
    
    if(onlineStatus === false)
        return( 
            <h1>Looks Like you're Offline</h1>
    );
    
    if(listOfResturant === null) return <Shimmer/>
    return(
        <div>
            <div className="flex mx-4 flex-wrap">
                    <div>
                        <input className="w-44 h-10 bg-violet-50  rounded-full text-center hover:w-44 hover:h-11 hover:bg-violet-100" type="text" 
                        // value={searchResturant}
                        // onChange={(e)=>{
                        //     setSearchResturant(e.target.value);
                        // }}
                        />
                        <button className="
                        text-slate-500 rounded-full bg-violet-50 w-10 h-10 mt-5  font-semibold
                        hover:text-white hover:bg-blue-500 items-center ml-1 "
                        // onChange={()=>{
                        //         console.log(searchResturant);

                            // const filteredRestaurant = listOfResturant.filter((res) =>
                            //     res.info.name.toLowerCase().includes(searchResturant.toLowerCase())
                            //   );
                
                            //   setFilterResturant(filteredRestaurant);    
                        // }}
                        ><AiOutlineSearch className="w-10"/></button>
                    </div>
                   
                    <div>
                        <button className="text-slate-500 rounded-md bg-violet-50 w-44 h-10 mt-5 align-left font-semibold 
                            hover:text-white hover:bg-blue-500 ml-2 " 
                            onClick={()=>{
                                setFilterResturant(listOfResturant);
                            }}
                            >
                                All Resturant</button>
                    </div>
                    <div>
                        <button className="ml-2 text-slate-500 rounded-md bg-violet-50 w-44 h-10 mt-5 align-left font-semibold 
                        hover:text-white hover:bg-blue-500" 
                        onClick={()=>{
                        const TopRatedResturant =filterResturant.filter(
                            (items)=> items.info.avgRating >= 4);
                            setFilterResturant(TopRatedResturant)
                        }}
                        >
                            Top Rated Resturant</button>
                    </div>
            </div>
        <div className="flex flex-wrap">
           {
            filterResturant?.map((resturant)=> <Link key={resturant.info.id} to={"/resturant/"+resturant.info.id}>
               { 
                resturant.info.isOpen ?
                (<PromptedResturantCard resData={resturant.info}/>
                ):(
                <ResturantCard    resData={resturant.info}/>)
               }
                
                </Link>)
           }
       </div>
       </div>
    )
}

export default Body;