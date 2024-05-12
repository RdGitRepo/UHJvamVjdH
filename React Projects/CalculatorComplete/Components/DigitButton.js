import { ACTIONS } from "./Calculater"

export default function DigitButton({digit, dispatch}){
    return(
        <button className={digit} onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload: { digit }})}>{digit}</button>
    )
}