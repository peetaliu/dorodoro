import React, { useState, useEffect } from "react";
import Timer from "./components/Timer";
const App = () => {
  const CD = 'cd'
  const RF = 'rf'
  const RESET = 'rs'
  const [cdCount, setCdCount] = useState(0) //Track loops
  const [rfCount, setRfCount] = useState(0)
  const [cdMax, setCdMax] = useState(0)//Max amt of cd->rf loops before reset
  const [cdLength, setCdLenght] = useState(0)
  const [rfLength, setRfLenght] = useState(0)


  return (
    <div>
      <h1>Hello World</h1>
      <Timer type={CD} length={cdLength} />
    </div>
  )
}

export default App;
