import React, { useEffect } from 'react';
import { useState } from 'react'
import { DataGrid } from '@material-ui/data-grid';

//import './App.css';
// lukumäärä???


function App() {
  //array destructuring 
const [rows,setRows]=useState([
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
])
  
//  const [nappula,setNappulat]=useState(["Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka","Jarno","Pekka"])  
  
const [osaNappuloista,setOsanappuloista]=useState([])  
const [valitut, setValitut]=useState([]);
const [selection, setSelection] = React.useState([]);

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 90,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${
          params.getValue('lastName') || ''
        }`,
    },
  ];

  const painikePainettu = ()=>{

    setRows([]);
  }


  /* const nappulaPainettu = (index)=>()=>{
    console.log("ok")
    let uusiLista = nappula.concat([nappula[index]])
    setNappulat(uusiLista)


  }
 */

/*  const onkoJarno=(x)=> {

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
 */  //JSX  //angular
 const omaf=()=>{
   console.log("valittiin jotain listalta")
 }
  return (<div>
    <div style={{ height: 400, width: '100%' }}>
{/*       {nappula.map((item,index)=><input key={index} onChange={(event)=>nimiMuuttui(event,index)}value={item}></input>)}
 */}      <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection onSelectionChange={omaf} />
       
{/*       {nappula.map((nappula,index)=><button key={index} onClick={nappulaPainettu(index)}>{nappula}</button>)}
      <button onClick={painikePainettu}>Näytä vain Jarnot</button> 
      
      {osaNappuloista.length==0 ? "Ei ole vielä suodatettu Jarnoja" : osaNappuloista.map((nappula,index)=><button key={index} onClick={nappulaPainettu(index)}>{nappula}</button>)}
 */}     </div><div><button onClick={painikePainettu}>Tyhjää lista</button></div></div>
  );
}

export default App;
