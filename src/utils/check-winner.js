export const checkWinner = (board) => {
    const boardWins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (row of boardWins) {
        if (board[row[0]] === board[row[1]] && board[row[0]] === board[row[2]] && board[row[0]] !== ' ') return board[row[0]];
    }
    return false;
}