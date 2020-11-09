import React, { useEffect } from 'react';
import { useState } from 'react'
import LapsiLista from './LapsiLista'
import uuid from 'react-uuid'
//import './App.css';
// lukumäärä???


//let u = {0:"pekka",1:"leena"}

function App() {
  //array destructuring 
  //let lapset = [{lapsenNimi:"Lissa"},{lapsenNimi:"Kaapo"}] 
  const [data, setData] = useState([])
  const [dataAlustettu, setDataAlustettu] = useState(false)

  //const [sukunimi, setSukunimi]=useState("")???

  const initialData = [
    {
      uid:uuid(),etunimi: "Pekka", sukunimi: "Jakamo", ikä: 29, jälkikasvu: [{ uid:uuid(),lapsenNimi: "Lissa", nimet: { ensimmäinen_nimi: "Lissa", toinen_nimi: "Riitta" } },
      { lapsenNimi: "Kaapo" }]
    },
    { uid:uuid(),etunimi: "Jarmo", sukunimi: "Jakamo", ikä: 49 }]

  const [selected, setSelected] = useState([])
  
  useEffect(() => {

    let jemma = window.localStorage;
    let tempData = JSON.parse(jemma.getItem("data"))
    if (tempData == null) {
      jemma.setItem("data", JSON.stringify(initialData))
      tempData = initialData
    } 
    setData(tempData);
    setDataAlustettu(true)
  }, [])

  useEffect(() => {
    if (dataAlustettu) {
      window.localStorage.setItem("data", JSON.stringify(data))
    }
  }, [data])


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
  const etunimiMuuttui = (event, index) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[index].etunimi = event.target.value;
    setData(syväKopio)

  }

  const ikäMuuttui = (event, index) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[index].ikä = event.target.value;
    setData(syväKopio)

  }
  const lisääHenkilö = () => {
    let syväKopio = JSON.parse(JSON.stringify(data))
    let uusiHenkilö= {uid:uuid(),etunimi: "", sukunimi: "", ikä: 0}
    syväKopio.push(uusiHenkilö) 
    setData(syväKopio)
  }
  const poistaHenkilö = (index) => {
    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio.splice(index,1)
    setData(syväKopio)
  }


  return (<div>

    {data.map((item, index) => <div key={index}>
    <input onChange={(event) => etunimiMuuttui(event, index)}
        value={item.etunimi}> 
      </input>
      <input onChange={(event) => sukunimiMuuttui(event, index)}
        value={item.sukunimi}>
      </input>
      <input onChange={(event) => ikäMuuttui(event, index)}
         value={item.ikä}>
      </input>
      <button onClick={()=>poistaHenkilö(index)}>Poista henkilö</button>
      {item.jälkikasvu ? <LapsiLista lapsenNimiMuuttui={lapsenNimiMuuttui} parentIndex={index} lapsiLista={item.jälkikasvu}></LapsiLista> : ""}
    </div>)}


    <button onClick={lisääHenkilö}>Lisää henkilö</button>
  </div>
  );
}

export default App;
