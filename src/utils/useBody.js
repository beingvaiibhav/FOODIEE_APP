import { useEffect , useState} from "react";
import { FOOD_API } from "./constants";

const useBody = ()=>{
    const [listOfResturant,setListOfResturant] = useState(null);
    let [filterResturant ,setFilterResturant] = useState([]);
    // let [searchResturant,setSearchResturant] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(FOOD_API);

        const json = await data.json();
        // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setListOfResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        //FILTER RESTURANT
        setFilterResturant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    return {listOfResturant,setListOfResturant,filterResturant,setFilterResturant};
}
export default useBody;