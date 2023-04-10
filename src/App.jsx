import { useState } from "react"
import Game from "./components/game"
import Header from "./components/header"
import Start from "./components/start"

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [hasWon, setHasWon] = useState(null);
  return (
    <div className="App">
      <Header />
      {gameOn ? <Game /> : <Start  setGameOn={setGameOn}/>}
    </div>
  )
}

export default App
