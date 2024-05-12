import { useEffect, useReducer } from "react"
import DigitButton from "./DigitButton"
import OperationButton from "./OperationButton"

export const ACTIONS = {
    ADD_DIGIT: "add-digit",
    CLEAR: "clear",
    DELETE_DIGIT: "delete-digit",
    CHOOSE_OPERATION: "choose-operation",
    EQUAL_TO: "equal-to",
}

function reducer(state, {type, payload}){
    switch(type){
        case ACTIONS.ADD_DIGIT:
            if(state.overwrite === true){
                return {
                    ...state,
                    currentOperand: payload.digit === '.' ? `${state.currentOperand}${payload.digit}` : `${payload.digit}`,
                    overwrite: false,
                }
            }
            if(payload.digit === '0' && state.currentOperand === '0'){
                return state ;
            } 
            if(payload.digit === '.' && state.currentOperand.includes('.')){
                return state ;
            } 
            return {
                ...state,
                currentOperand: `${state.currentOperand}${payload.digit}`,
            }
        case ACTIONS.CLEAR:
            return {
                ...state,
                currentOperand:'0',
                previousOperand: null,
                operation: null,
                overwrite: true
            }    
        case ACTIONS.DELETE_DIGIT:
            return{
                ...state,
                currentOperand:'0',
                overwrite: true,
            }
        case ACTIONS.CHOOSE_OPERATION:
            if(state.currentOperand === '0' && state.previousOperand == null){
                return state ;
            } 
            if(state.previousOperand == null){
                return{
                    ...state,
                    currentOperand: '0',
                    previousOperand: state.currentOperand,
                    operation: payload.operation,
                    overwrite: true,
                }
            }
            if(state.currentOperand === '0'){
                return {
                    ...state,
                    operation: payload.operation,
                }
            } 
            return {
                ...state,
                currentOperand: '0',
                previousOperand: execute(state).toString(),
                overwrite: true,
            }
        case ACTIONS.EQUAL_TO:
            if(state.previousOperand == null){
                return state;
            }
            return {
                ...state,
                currentOperand: execute(state).toString(),
                previousOperand: null,
                operation: null,
            }
            
        default:
            console.log(`Unknown Action ${type}`);
    }
}

const INTEGER_FORMATER = new Intl.NumberFormat('en-us', {
    maximumFractionDigits:0
});

function operandFormater(operand){
    if(operand == null) return operand;

    const [integer, decimal] = operand.split('.');
    if(decimal == null) return INTEGER_FORMATER.format(integer);
    return `${INTEGER_FORMATER.format(integer)}.${decimal}`;
}

function execute({currentOperand, previousOperand, operation}){
    const current = parseFloat(currentOperand), 
          previous = parseFloat(previousOperand);

          if(isNaN(current) || isNaN(previous)){
            return 'NaN' ;
          }

          switch(operation){
            case '+':
                return previous + current;
            case '-':
                return previous - current;
            case 'x':
                return previous * current;
            case '÷':
                return previous / current;
            default:
                console.log("UnSupported Mathmatical oparation");
          }
}

export default function Calculater(){
    const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {currentOperand:'0', previousOperand: null, operation: null, overwrite: true})

    useEffect(() => {
        window.addEventListener("keydown", handleKeys);

        function handleKeys(e) {
            console.log(e.key,e)
            const elements = document.getElementsByClassName(e.key);
            if (elements.length > 0) {
                elements[0].click();
            }
        }
        return () => window.removeEventListener("keydown", handleKeys);
    })

    return (
        <div className="calculater-grid">
            <div className="output">
                <div className="prev-operand">{operandFormater(previousOperand)} {operation}</div>
                <div className="cur-operand">{operandFormater(currentOperand)}</div>
            </div>
            <button className="span-two Clear" onClick={() => dispatch({type: ACTIONS.CLEAR})}>AC</button>
            <button className="Delete" onClick={() => dispatch({type: ACTIONS.DELETE_DIGIT})}>DEL</button>
            <OperationButton operation='÷' dispatch={dispatch} operationName='/'/>
            <DigitButton digit='1' dispatch={dispatch}/>
            <DigitButton digit='2' dispatch={dispatch}/>
            <DigitButton digit='3' dispatch={dispatch}/>
            <OperationButton operation='x' dispatch={dispatch} operationName='*'/>
            <DigitButton digit='4' dispatch={dispatch}/>
            <DigitButton digit='5' dispatch={dispatch}/>
            <DigitButton digit='6' dispatch={dispatch}/>
            <OperationButton operation='-' dispatch={dispatch} operationName='-'/>
            <DigitButton digit='7' dispatch={dispatch}/>
            <DigitButton digit='8' dispatch={dispatch}/>
            <DigitButton digit='9' dispatch={dispatch}/>
            <OperationButton operation='+' dispatch={dispatch} operationName='+'/>
            <DigitButton digit='0' dispatch={dispatch}/>
            <DigitButton digit='.' dispatch={dispatch}/>
            <button className="span-two Enter" onClick={() => dispatch({type: ACTIONS.EQUAL_TO})}>=</button>
        </div>
    )
}