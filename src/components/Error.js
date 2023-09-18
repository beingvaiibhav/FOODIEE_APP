import { useRouteError } from "react-router-dom";
function Error(){
    const err = useRouteError();
    return(
        <div>
            <h1>{err.status}: {err.statusText}</h1>
            <h2>Oops Something went Wrong....</h2>
        </div>
    )

}
export default Error;
