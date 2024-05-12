import { useRouteError } from 'react-router-dom';
export default function ErrorLayout(){
const error = useRouteError();

    return (
        <div id="errorPage">
            <p>Oops!</p>
            <p>Sorry, an unexpected error has occurred!</p>
            <p>
                <strong>{error.statusText || error.message}</strong>
            </p>
        </div>
    )
}