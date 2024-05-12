import { ACTIONS } from "./Calculater";

export default function OperationButton({operation, dispatch, operationName}){
    return(
        <button className={operationName} onClick={() => dispatch({type: ACTIONS.CHOOSE_OPERATION, payload: { operation }})}>{operation}</button>
    )
}


//Reducer Logic

// function useReducer(reducer, initialstate){
//     const [state, setState] = useState(initialstate);

//     function dispatch(action){
//         setState(prevState => reducer(prevState, action));
//     }

//     return [ state, dispatch ];
// }