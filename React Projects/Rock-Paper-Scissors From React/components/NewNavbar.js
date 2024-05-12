import { Container } from "./ImageContainer";
import { UserScore } from "./UserScore"; 
import { ComputerScore } from "./ComputerScore"; 
import { useState } from "react";

export default function RPCGame(){
    const [userScore, setUserScore] = useState(0);
    const [comScore, setComScore] = useState(0);
    const [win, setWin] = useState(null);

    function onResult(){
        const UserResult = Math.random();
        const ComResult = Math.random();
        
        const user = gameLogic(UserResult);
        const computer = gameLogic(ComResult);
        
        const winner = winnerLogic(user, computer);
        if(winner === "U") setUserScore(userScore + 1);
        if(winner === "C") setComScore(comScore + 1);
        setWin(winner);
    }

    let result;
    if(win === null) result = 'Match Result';
    if(win === undefined) result = 'Match Draw';
    if(win === "U") result = `Winner is User`;
    if(win === "C") result = 'Winner is Computer';

    return(
        <div className="game">
            <h1 className="title">Rock_Paper_Scissors</h1>
            <Container onResult={() => onResult()}/>
            <div className="score">
                <UserScore userScore={userScore}/>
                <ComputerScore comScore={comScore}/>
            </div>
            <div className="winner">
                <strong className={win === "U" ? "user" : win === "C" ? "computer" : ""}>{result}</strong>
            </div>
            <div className="reset">
                <button onClick={() => window.location.reload()}>Reset Game</button>
            </div>
        </div>
    )
}

function gameLogic(expression){
    switch(true){
        case (expression < .33 && expression > 0) : {
            return "Rock";
        }
        case (expression < .66 && expression > .33) : {
            return "Paper";
        }
        case (expression < 1 && expression > .66): {
            return "Scissors";
        }
        default:{
            console.log("error please try again");
            return null;
        }
    }
}

function winnerLogic(user, computer){
    const logic = [['Rock', 'Scissors'], ['Paper', 'Rock'], ['Scissors', 'Paper']];
    
    for(let x = 0; x < logic.length; x++){
        let [a, b] = logic[x];
        if(a === user && b === computer){
            return "U";
        }
        if(a === computer && b === user){
            return "C";
        }
    }
    if(user === computer){
        return undefined;
    }
    
    return null;

}