import React from 'react';
import { useState } from 'react'
//import './App.css';
// lukumäärä???


function App() {
  //array destructuring 
  const [bruttopalkka, setBruttopalkka] = useState(0)
  const [veroprosentti, setVeroprosentti] = useState(0)
  const [veronmäärä, setVeronmäärä] = useState(0)

  const nappiaPainettu = () => {

    let vero = bruttopalkka * veroprosentti / 100
    setVeronmäärä(vero);
  }
  const palkkaMuuttunut = (event) => {
    setBruttopalkka(event.target.value)
    //   console.log("Teksti on muuttunut")
  }
  const veroprosMuuttunut = (event) => {
    setVeroprosentti(event.target.value)
    // setTeksti(event.target.value)
    //     console.log("Teksti on muuttunut")
  }

  //JSX  //angular
  return (
    <div>
      <button onClick={nappiaPainettu}>Laske veron määrä</button>
      <input onChange={(event) => palkkaMuuttunut(event)} value={bruttopalkka}></input>
      <input onChange={(event) => veroprosMuuttunut(event)} value={veroprosentti}></input>
      <p>{veronmäärä}</p>
    </div>
  );
}

export default App;
