import { useEffect, useState } from "react";
import Board from "./board";

const Game = ({name, isFirst, setGameOn}) => {
    const [playerType, setPlayerType] = useState(isFirst ? 'X' : 'Y');
    const [comType, setComType] = useState(isFirst ? 'Y' : 'X');
    const [comTalk, setComTalk] = useState('Welcome Human, prepare for defeat.');
    const [isTurn, setIsTurn] = useState(isFirst);
    const [hasWon, setHasWon] = useState(null);

    const resetGame = () => {
        setGameOn(false);
    }

    useEffect(() => {
        if (hasWon !== null) {
            hasWon === playerType ? setComTalk('You Have bested me Human.') : setComTalk('Ha! I win, pathetic Human!')
        }
    }, [hasWon])

    return <div id="game">
        {hasWon ? <h2>{hasWon === playerType ? `${name} Wins!` : hasWon === comType ? 'Com Wins!' : 'Draw!'} </h2> : null}
        {hasWon ? <button onClick={resetGame}>Play Again</button> : null}
        <Board isTurn={isTurn} setIsTurn={setIsTurn} playerType={playerType} comType={comType} setComTalk={setComTalk} setHasWon={setHasWon} />
        {hasWon ? null : <p>Current Player: {isTurn ? name : 'Com'}</p>}
        <p>Com: {comTalk}</p>
    </div>
}

export default Game;