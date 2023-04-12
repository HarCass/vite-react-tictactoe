export const comTurn = (board, com) => {
    const boardCopy = [...board];
    while( JSON.stringify(board) === JSON.stringify(boardCopy)) {
        const ranNum = Math.floor(Math.random() * boardCopy.length);
        if (boardCopy[ranNum] === ' ') boardCopy[ranNum] = com;
    }
    return boardCopy;
}