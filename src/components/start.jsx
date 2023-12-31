const Start = ({setGameOn, name, setName, setIsFirst}) => {
    return <div id="start">
        <h2>Welcome, to start the game enter your name and press play.</h2>
        <form onSubmit={(event) => {
            event.preventDefault();
            setName(event.target[0].value);
            setIsFirst(event.target[1].value === 'true');
            setGameOn(true);
        }}>
            <input name="name" value={name} onChange={(e) => setName(e.target.value)} required></input>
            <select required>
                <option value={true}>Go First</option>
                <option value={false}>Go Second</option>
                <option value={Math.random() >= 0.5}>Random</option>
            </select>
            <button type="submit">Play</button>
        </form>
    </div>
}

export default Start;