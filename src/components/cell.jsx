const Cell = ({num, type}) => {
    return <div className="cells" id={`cell${num}`}><p>{type}</p></div>
}

export default Cell;