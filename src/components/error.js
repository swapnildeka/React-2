import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log(error);
    return(

        <>
        <div>
            <h1> Oops !!</h1>
            <h2> Sorry but the requested url cant be found </h2>
        </div>
        <div>
            <h1>{error.status}</h1>
            <h2>{error.statusText}</h2>
        </div>
        </>
    )



};
export default Error;