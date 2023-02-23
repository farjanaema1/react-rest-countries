import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      {
        <Countries></Countries>
      }
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

function Countries(){
  const[countries,setCountries]=useState([]);
  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>setCountries(data))
  },[])
  return(
    <div>
      <h2>REST COUNTRIES</h2>
      <h4>countries available : {countries.length}</h4>
     <div className='all-countries'>
     {
        countries.map(country=> <Country country={country}></Country>)
      }
     </div>
    </div>
  )
}
function Country(props){
  const{name,capital}=props.country;
  return(
    <div className='single-country'>
      <h2>NAME:{props.country.name.common}</h2>
      <p>CAPITAL:{props.country.capital}</p>
      <img src="{props.flags.png}" alt="" />
    </div>
  )
}

export default App;
