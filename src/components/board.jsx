import Cell from "./cell";

const Board = () => {
    return <div id="board">
        <Cell num={0} type="X" />
        <Cell num={1} type="X" />
        <Cell num={2} type="X" />
        <Cell num={3} type="X" />
        <Cell num={4} type="X" />
        <Cell num={5} type="X" />
        <Cell num={6} type="X" />
        <Cell num={7} type="X" />
        <Cell num={8} type="X" />
    </div>
}

export default Board;