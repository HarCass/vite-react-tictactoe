const Start = ({setGameOn}) => {
    return <div id="start">
        <h2>Welcome, to start the game press play.</h2>
        <button onClick={() => {
            setGameOn(true);
        }}>Play</button>
    </div>
}

export default Start;