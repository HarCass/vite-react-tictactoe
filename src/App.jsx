import { useState } from "react"
import Game from "./components/game"
import Header from "./components/header"
import Start from "./components/start"

function App() {
  const [gameOn, setGameOn] = useState(false);
  const [name, setName] = useState('');
  const [isFirst, setIsFirst] = useState(null);
  return (
    <div className="App">
      <Header />
      {gameOn ? <Game name={name} isFirst={isFirst} setGameOn={setGameOn} /> : <Start  setGameOn={setGameOn} name={name} setName={setName} setIsFirst={setIsFirst}/>}
    </div>
  )
}

export default App
