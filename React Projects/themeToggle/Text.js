import { useState } from "react";

function useReducer(reducer, initialState){
    const [state, setState] = useState(initialState);

    function dispatch(action){
        const nextState = reducer(state, action);
        setState(nextState);
    }

    return [state, dispatch];
}



// what is symentic tag 

// symentic tags are those tag which tell us what kind of content does it contain eg nav, header footer aside 

// non symentic tag like div span these are non symentic tags where we dont know what kind of content does it contain


// what is attribute 

// attributes are a pice of markup language help us to alter the bhaviour of tags or tell tag how to display it self

