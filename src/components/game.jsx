import { useState } from "react";
import Board from "./board";

const Game = ({name, isFirst}) => {
    const [playerType, setPlayerType] = useState(isFirst ? 'X' : 'Y');
    const [comType, setComType] = useState(isFirst ? 'Y' : 'X');
    const [comTalk, setComTalk] = useState('Welcome Human, prepare for defeat.');
    const [isTurn, setIsTurn] = useState(isFirst);
    return <div id="game">
        <Board isTurn={isTurn} setIsTurn={setIsTurn} playerType={playerType} comType={comType} setComTalk={setComTalk}/>
        <p>Current Player: {isTurn ? name : 'Com'}</p>
        <p>Com: {comTalk}</p>
    </div>
}

export default Game;