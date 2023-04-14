export const comTurn = (board, com) => {
    const boardCopy = [...board];
    while(true) {
        const ranNum = Math.floor(Math.random() * boardCopy.length);
        if (boardCopy[ranNum] === ' ') {
            boardCopy[ranNum] = com;
            break;
        }
    }
    return boardCopy;
}