import { useEffect, useState } from "react";
import Cell from "./cell";
import { comTurn } from "../utils/com";
import { checkWinner } from "../utils/check-winner";

const Board = ({isTurn, setIsTurn, playerType, comType, setComTalk, setHasWon}) => {
    const [boardArr, setBoardArr] = useState(Array(9).fill(' '));
    const [turnCount, setTurnCount] = useState(0);

    useEffect(() => {
        const winner = checkWinner(boardArr);
        if (winner) {
            setHasWon(winner);
        }
        else if (turnCount === 9) {
            setHasWon('DRAW');
        }
        else if(!isTurn) {
            setComTalk('My turn, prepare yourself for a brilliant move!');
            setTimeout(() => {
                setBoardArr(currBoard => {
                    return comTurn(currBoard, comType);
                });
                setTurnCount(count => count + 1);
                setIsTurn(true);
                setComTalk('I have made the most optimal move, take your pathetic turn human.');
            }, 2000)
        }
    }, [isTurn])

    return <div id="board">
        <Cell num={0} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={1} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={2} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={3} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={4} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={5} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={6} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={7} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
        <Cell num={8} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} setTurnCount={setTurnCount} />
    </div>
}

export default Board;