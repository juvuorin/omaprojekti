import React, { useEffect } from 'react';
import { useState } from 'react'

//import './App.css';
// lukumäärä???


//let u = {0:"pekka",1:"leena"}

function App() {
  //array destructuring 
  //let lapset = [{lapsenNimi:"Lissa"},{lapsenNimi:"Kaapo"}] 
  const [data, setData] = useState([])
  //const [sukunimi, setSukunimi]=useState("")???

  const initialData = [
    {
      etunimi: "Pekka", sukunimi: "Jakamo", ikä: 29, jälkikasvu: [{ lapsenNimi: "Lissa", nimet: { ensimmäinen_nimi: "Lissa", toinen_nimi: "Riitta" } },
      { lapsenNimi: "Kaapo" }]
    },
    { etunimi: "Jarmo", sukunimi: "Jakamo", ikä: 49 }]

  const [selected, setSelected] = useState([])
  // localSotragen data-avaimena on "data"
  useEffect(() => {

    let jemma = window.localStorage;
    let tempData = JSON.parse(jemma.getItem("data"))
    if (!tempData) {
      jemma.setItem("data", JSON.stringify(initialData))
      tempData = initialData
    }
    setData(tempData);

  },
    [])
  useEffect(() => {

    window.localStorage.setItem("data", JSON.stringify(data))

  },
    [data])


  const painikePainettu = () => {

    let uusdata = JSON.parse(JSON.stringify(data));
    //    let uusdata = [...data];

    //   uusdata[0].jälkikasvu[0].lapsenNimi="Mikko"
    // let uusdata = [...data];
    let lopullinenData = data.concat(uusdata)
    setData(lopullinenData)
    //setRows([]);
  }
  const näytäJälkikasvu = (index) => {
    if (data[index].jälkikasvu !== undefined) {
      return data[index].jälkikasvu.map((alkio, lapsenIndex) =>
        <div key={lapsenIndex}>
          <input onChange={(e) => { lapsenNimiMuuttui(e, index, lapsenIndex) }} value={alkio.lapsenNimi}>
          </input>
        </div>)

    }
  }
  const lapsenNimiMuuttui = (event, vanhemmanIndex, lapsenIndex) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[vanhemmanIndex].jälkikasvu[lapsenIndex].lapsenNimi = event.target.value;
    setData(syväKopio)


  }
  const sukunimiMuuttui = (event, index) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[index].sukunimi = event.target.value;
    setData(syväKopio)

  }


  return (<div>

    {data.map((item, index) => <div key={index}><input onChange={(event) => sukunimiMuuttui(event, index)} value={item.sukunimi}></input> {item.etunimi} {item.ikä}
      {näytäJälkikasvu(index)}

    </div>)}
    <button onClick={painikePainettu}> Paina minua</button>
  </div>
  );
}

export default App;
