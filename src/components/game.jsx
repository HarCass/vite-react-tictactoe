import { useState } from "react";
import Board from "./board";

const Game = ({name, isFirst}) => {
    const [isTurn, setIsTurn] = useState(isFirst);
    console.log(isTurn);
    return <div id="game">
        <Board />
        <p>Current Player: {isTurn ? name : 'Com'}</p>
    </div>
}

export default Game;