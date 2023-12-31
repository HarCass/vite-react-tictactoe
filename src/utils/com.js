import { checkWinner } from "./check-winner";

export const comTurn = (board, com) => {
    const boardCopy = [...board];
    const player = com === 'X' ? 'O' : 'X';

    for (let i = 0; i < 9; i++) {
        if (boardCopy[i] == ' ') {
            boardCopy[i] = com;
            if (checkWinner(boardCopy) === com) {
                return boardCopy;
            }
            boardCopy[i] = ' ';
        }
    }

    for (let i = 0; i < 9; i++) {
        if (boardCopy[i] == ' ') {
            boardCopy[i] = player;
            if (checkWinner(boardCopy) === player) {
                boardCopy[i] = com;
                return boardCopy;
            }
            boardCopy[i] = ' ';
        }
    }

    while(true) {
        const ranNum = Math.floor(Math.random() * 9);
        if (boardCopy[ranNum] === ' ') {
            boardCopy[ranNum] = com;
            return boardCopy;
        }
    }
}