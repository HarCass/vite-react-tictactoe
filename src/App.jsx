import { useState } from "react"
import Game from "./components/game"
import Header from "./components/header"
import Start from "./components/start"

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [hasWon, setHasWon] = useState(null);
  const [name, setName] = useState(null);
  const [isFirst, setIsFirst] = useState(null);
  return (
    <div className="App">
      <Header />
      {gameOn ? <Game name={name} isFirst={isFirst} /> : <Start  setGameOn={setGameOn} setName={setName} setIsFirst={setIsFirst}/>}
    </div>
  )
}

export default App
