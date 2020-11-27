import React, { useEffect } from 'react';
import { useState } from 'react'

function LapsiLista(props) {
   
   return (<div>
        {props.lapsiLista.map((alkio, lapsenIndex) =>
        <div key={lapsenIndex}>
          <input onChange={(e) => { props.lapsenNimiMuuttui(e, props.parentIndex, lapsenIndex) }} value={alkio.lapsenNimi}>
          </input>
        </div>)}
  </div>
  ); 
}

export default LapsiLista;
