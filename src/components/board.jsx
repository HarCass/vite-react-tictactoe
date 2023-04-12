import { useEffect, useState } from "react";
import Cell from "./cell";
import { comTurn } from "../utils/com";

const Board = ({isTurn, setIsTurn, playerType, comType, setComTalk}) => {
    const [boardArr, setBoardArr] = useState(Array(9).fill(' '));

    useEffect(() => {
        if(!isTurn) {
            setComTalk('My turn, prepare yourself for a brilliant move!');
            setTimeout(() => {
                setBoardArr(currBoard => comTurn(currBoard, comType));
                setComTalk('I have made the most optimal move, take your pathetic turn human.');
                setIsTurn(true);
            }, 2000);
        }
    }, [isTurn])

    return <div id="board">
        <Cell num={0} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={1} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={2} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={3} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={4} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={5} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={6} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={7} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
        <Cell num={8} isTurn={isTurn} setIsTurn={setIsTurn}  playerType={playerType} boardArr={boardArr} setBoardArr={setBoardArr} />
    </div>
}

export default Board;