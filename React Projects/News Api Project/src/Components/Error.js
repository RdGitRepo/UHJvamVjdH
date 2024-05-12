import { useRouteError, isRouteErrorResponse } from "react-router-dom"

export default function Error(){
    const error = useRouteError();
    if(isRouteErrorResponse(error)){
        return (
            <div className="error">
                <h1>Oops!</h1>
                <p>Sorry, an unexpected error has occured</p>
                <p>{error.statusText} || {error.message}</p>
            </div>
        )
    }else{
        return <h1>Oops!</h1>
    }
}