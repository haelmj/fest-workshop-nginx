import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('London');

  const getWeather = async () => {  
    let result = await fetch(`/api/weather?q=${city}`).then(res => res.json())
    setWeather(result);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input name='city' value={city} onChange={(e)=> setCity(e.target.value)} placeholder="Enter City Name" />
        <button onClick={getWeather}> Show weather info</button>
        {weather && <>
          <h1>{weather.name}</h1>
          <p>{weather.weather[0].main}</p>
          <p>{weather.weather[0].description}</p>
        </>}
      </header>
    </div>
  );
}

export default App;