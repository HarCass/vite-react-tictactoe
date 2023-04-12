const Cell = ({num, isTurn, setIsTurn, playerType, boardArr, setBoardArr}) => {
    return <div className="cells" id={`cell${num}`} onClick={() => {
        if (isTurn) {
            setBoardArr(currBoard => {
                const boardCopy = [...currBoard];
                boardCopy[num] = playerType;
                return boardCopy;
            });
            setIsTurn(false);
        }
    }}>{boardArr[num]}</div>
}

export default Cell;