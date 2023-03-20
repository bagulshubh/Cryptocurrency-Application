import React from 'react';
import Info from "./Components/Info";
import { useState,useEffect } from 'react';

function App(props) {

  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false";

  const [info,setInfo] = useState([]);

  async function getInfo(){
      let response = await fetch(url);
      let output = await response.json();
      setInfo(output);
  }

  const [input, setInput] = useState("");

  useEffect(
    ()=>(getInfo()),[]
  );

  
  return (
    <div className='app'>

      <div className='input-con'>
        <input type="text" className='input'  placeholder='Provide the coin name' value={input} onInput={(e) => (setInput(e.target.value))}></input>
      </div>

      <div className='info-container'>
        <Info info = {info} input = {input} setInfo={setInfo}></Info>
      </div>

    </div>
  );
}

export default App;
