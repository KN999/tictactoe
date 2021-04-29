export default function computersTurn(board) {
    let squares = [];

    for (let i = 0; i < 10; i++) {
        if (board[i] === null) squares.push(i);
    }
    console.log(board)
    const randomNumber = Math.floor(Math.random() * squares.length);

    return squares[randomNumber];
}