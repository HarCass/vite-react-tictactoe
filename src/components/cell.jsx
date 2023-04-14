const Cell = ({num, isTurn, setIsTurn, playerType, boardArr, setBoardArr, setTurnCount}) => {
    return <div className="cells" id={`cell${num}`} onClick={() => {
        if (isTurn && boardArr[num] === ' ') {
            setBoardArr(currBoard => {
                const boardCopy = [...currBoard];
                boardCopy[num] = playerType;
                return boardCopy;
            });
            setTurnCount(count => count + 1);
            setIsTurn(false);
        }
    }}>{boardArr[num]}</div>
}

export default Cell;