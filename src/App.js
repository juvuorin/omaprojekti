import React, { useEffect } from 'react';
import { useState } from 'react'
//import './App.css';
// lukumäärä???


function App() {
  //array destructuring 

  
  const [nappula,setNappulat]=useState(["Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka"])  
  const [osaNappuloista,setOsanappuloista]=useState([])  

  const nappulaPainettu = (index)=>()=>{
    console.log("ok")
    let uusiLista = nappula.concat([nappula[index]])
    setNappulat(uusiLista)


  }


 const onkoJarno=(x)=> {

    if (x=="Jarno") {
      return true
    } else {
      return false
    }
 }

  const painikePainettu = ()=>{

    let listaJossaVainJarnot = nappula.filter(item=>item=="Jarno")
    setOsanappuloista(listaJossaVainJarnot)    

  }
  const nimiMuuttui = (event,index)=>{
    let uusiLista = [...nappula]
    uusiLista[index] = event.target.value
    console.log(event.target.value)
    setNappulat(uusiLista)
  }
  //JSX  //angular
  return (
    <div >
      {nappula.map((item,index)=><input key={index} onChange={(event)=>nimiMuuttui(event,index)}value={item}></input>)}

{/*       {nappula.map((nappula,index)=><button key={index} onClick={nappulaPainettu(index)}>{nappula}</button>)}
      <button onClick={painikePainettu}>Näytä vain Jarnot</button> 
      
      {osaNappuloista.length==0 ? "Ei ole vielä suodatettu Jarnoja" : osaNappuloista.map((nappula,index)=><button key={index} onClick={nappulaPainettu(index)}>{nappula}</button>)}
 */}    </div>
  );
}

export default App;
