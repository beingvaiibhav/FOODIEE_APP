import { useDispatch } from "react-redux";
import { IMAGE_URL} from "../utils/constants";
import { addItems } from "../cartStore/cartSlice";

function ResturantItems({items}){
    const dispatch = useDispatch();
    const itemsAddCart =(item)=>{
        dispatch(addItems(item));
    }
    // console.log(items);
    return(
        <div className="p-2 m-2 border-gray-200 text-left ">
            {items.map((item)=><div key={item.card.info.id}>
                                    <div className="flex  border-b-4 mt-2 mb-2 justify-between  ">
                                        <div className="w-9/12">
                                            <div className="flex flex-col text-left font-semibold">
                                                    <span>{item.card.info.name}</span>
                                                    <span> ₹{item.card.info.defaultPrice/100 || item.card.info.price/100}</span>
                                            </div>
                                            <p className="text-left text-sm">{item.card.info.description}</p>
                                        </div>
                                        <div className="w-3/12 p-4">
                                            <button className="text-sm text-white  font-semibold  mx-5 my-8 p-2 bg-black rounded-lg shadow-lg 
                                             absolute hover:shadow-2xl hover:bg-white hover:text-yellow-500 "
                                             onClick={()=> itemsAddCart(item)}
                                             >
                                            ADD+</button>
                                            <img className="rounded-lg" src={IMAGE_URL + item.card.info.imageId}/>
                                        </div>
                                    </div>             
                             </div>)}
           
        </div>
    )
}
export default ResturantItems;