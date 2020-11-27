import React, { useEffect, useReducer, initialState } from 'react';
import { useState } from 'react'
import LapsiLista from './LapsiLista'
import uuid from 'react-uuid'
import axios from 'axios';
//import './App.css';
// lukumäärä???


//let u = {0:"pekka",1:"leena"}
const initialData =
  [
    {
      uid: uuid(), etunimi: "Pekka", sukunimi: "Jakamo", ikä: 29, jälkikasvu: [
        {
          uid: uuid(), lapsenNimi: "Lissa", nimet: {
            ensimmäinen_nimi: "Lissa", toinen_nimi: "Riitta"
          }
        },
        {
          lapsenNimi: "Kaapo"
        }
      ]
    },
    {
      uid: uuid(), etunimi: "Jarmo", sukunimi: "Jakamo", ikä: 49
    }
  ]


function reducer(state, action) {
  let syväKopio = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case "ETUNIMI_MUUTTUI":

      syväKopio[action.data.ihminenIndex].etunimi = action.data.newText;
      return syväKopio


    //      return action.data
    //    case "INIT_DATA":
    //      return action.data
    //    case "INIT_DATA":
    //      return action.data

    case "INIT_DATA":
      return action.data
    default:
      throw new Error();
  }
}


function App() {
  //array destructuring 
  //let lapset = [{lapsenNimi:"Lissa"},{lapsenNimi:"Kaapo"}] 
  //const [data, setData] = useState([])

  const [dataAlustettu, setDataAlustettu] = useState(false)
  const [state, dispatch] = useReducer(reducer, []);
  //const [sukunimi, setSukunimi]=useState("")???

  const [selected, setSelected] = useState([])
  id=45

  try {
    let result = await axios.get("http://localhost:4000/lähetäoppilaillesähköpostit/",???)
    if (result.data.length > 0) {
      dispatch({ type: "EXAM_FETCHED", data: result.data })
      //          setData(result.data);
      setDataAlustettu(true)
    } else {
      throw ("Nyt pitää data kyllä alustaa!")
    }
  }
  catch (exception) {
    createData();
    console.log(exception)
  }
}
const fn=()=>{

  tentti ={nimi: "tentti2",pvm:"20.09.2020"}
  let id=9
  try {
    let result = await axios.put("http://localhost:4000/tentit/"+id,{tentti})
    if (result.data.length > 0) {
      dispatch({ type: "INIT_DATA", data: result.data })
      //          setData(result.data);
      setDataAlustettu(true)
    } else {
      throw ("Nyt pitää data kyllä alustaa!")
    }
  }
  catch (exception) {
    createData();
    console.log(exception)
  }
}


}

  useEffect(() => {

    const createData = async () => {

      try {

        let result = await axios.post("http://localhost:3005/ihmiset", initialData)
        dispatch({ type: "INIT_DATA", data: initialData })
        // setData(initialData)
        setDataAlustettu(true)

      } catch (exception) {
        alert("Tietokannan alustaminen epäonnistui")
      }
    }

    const fetchData = async () => {
      try {
        let result = await axios.get("http://localhost:4000/tentit")
        if (result.data.length > 0) {
          dispatch({ type: "INIT_DATA", data: result.data })
          //          setData(result.data);
          setDataAlustettu(true)
        } else {
          throw ("Nyt pitää data kyllä alustaa!")
        }
      }
      catch (exception) {
        createData();
        console.log(exception)
      }
    }
    fetchData();
  }, [])
  //SEH -> Structured Exception Handling
  useEffect(() => {

    const updateData = async () => {
      try {
        let result = await axios.put("http://localhost:3005/ihmiset", state)
      } catch (exception) {
        console.log("Datan päivitys ei onnistunut")
      }
      finally {

      }
    }/*  
    axios.put("http://localhost:3005/ihmiset", data)
    .then(function (response) {
      // handle success
      console.log(response);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    }); */


    if (dataAlustettu) {
      updateData();
    }
  }, [state])

  //   if (dataAlustettu) {
  //PUT
  //     window.localStorage.setItem("data", JSON.stringify(data))
  //   }
  // }, [data])
  //*/
  /* 
    const painikePainettu = () => {
  
      let uusdata = JSON.parse(JSON.stringify(data));
      //    let uusdata = [...data];
  
      //   uusdata[0].jälkikasvu[0].lapsenNimi="Mikko"
      // let uusdata = [...data];
      let lopullinenData = data.concat(uusdata)
      setData(lopullinenData)
      //setRows([]);
    } */
  const näytäJälkikasvu = (index) => {
    if (state[index].jälkikasvu !== undefined) {
      return state[index].jälkikasvu.map((alkio, lapsenIndex) =>
        <div key={alkio.uid}>
          <input /* onChange={(e) => { lapsenNimiMuuttui(e, index, lapsenIndex) }} */ value={alkio.lapsenNimi}>
          </input>
        </div>)

    }
  }
  /* const lapsenNimiMuuttui = (event, vanhemmanIndex, lapsenIndex) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[vanhemmanIndex].jälkikasvu[lapsenIndex].lapsenNimi = event.target.value;
    setData(syväKopio)

  }
  const sukunimiMuuttui = (event, index) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[index].sukunimi = event.target.value;
    setData(syväKopio)

  } */
  /* const etunimiMuuttui = (event, index) => {

    let syväKopio = JSON.parse(JSON.stringify(data))
    syväKopio[index].etunimi = event.target.value;
    setData(syväKopio)

  }
 */
  /*  const ikäMuuttui = (event, index) => {
 
     let syväKopio = JSON.parse(JSON.stringify(data))
     syväKopio[index].ikä = event.target.value;
     setData(syväKopio)
 
   }
   const lisääHenkilö = () => {
     let syväKopio = JSON.parse(JSON.stringify(data))
     let uusiHenkilö = { uid: uuid(), etunimi: "", sukunimi: "", ikä: 0 }
     syväKopio.push(uusiHenkilö)
     setData(syväKopio)
   }
   const poistaHenkilö = (index) => {
     let syväKopio = JSON.parse(JSON.stringify(data))
     syväKopio.splice(index, 1)
     setData(syväKopio)
   } */

  console.log(state);
  return (<div>

    {state.map((item, index) => <div key={item.uid}>
      <input onChange={(event) => dispatch({ type: "ETUNIMI_MUUTTUI", data: { newText: event.target.value, ihminenIndex: index } })}
        value={item.etunimi}>
      </input>
      <input /* onChange={(event) => sukunimiMuuttui(event, index)} */
        value={item.sukunimi}>
      </input>
      <input /* onChange={(event) => ikäMuuttui(event, index)} */
        value={item.ikä}>
      </input>
      <button /* onClick={() => poistaHenkilö(index)} */>Poista henkilö</button>
      {item.jälkikasvu ? <LapsiLista dispatch={dispatch} parentIndex={index} lapsiLista={item.jälkikasvu}></LapsiLista> : ""}
    </div>)}


    <button /* onClick={lisääHenkilö} */>Lisää henkilö</button>
  </div>
  );
}

export default App;
