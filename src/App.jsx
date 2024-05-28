import { useEffect, useState } from 'react'
import './App.css'

import WeatherCard from './Components/weatherCard';
// import getData from './Components/getData'



// console.log(data);


function App() {

  const[city,setCity]=useState("Delhi");
  const[tempInfo,setTempInfo]=useState({});
  console.log(city);


  async function getWeatherData()
{

     try{
       const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4ed2494724e508791c9517109c19590c`
        const data = await fetch(url);
        const response = await data.json();
        // console.log(response);
        const {temp,pressure,humidity}=response.main;
        const {main:mood}=response.weather[0];
        const {speed}=response.wind;
        const name=response.name;
        const {country,sunset}=response.sys;
        // console.log(mood);
        const myCityWeather={
          temp,
          pressure,
          humidity,
          mood,
          name,
          speed,
          country,
          sunset,
        };

        setTempInfo(myCityWeather);
        console.log(tempInfo);

     }
     catch(err)
     {
        console.log(err);
     }

}

useEffect(()=>{
  getWeatherData()
},[])
  
  return (
    <>
     <div className="weatherContent">
     <div className='wrap'>
        <div className="search">
          <input type='search'
            placeholder='search...'
            autoFocus
            id='search'
            className='searchTerm'
            value={city}
            onChange={(e)=>{console.log(e.target.value);
              setCity(e.target.value)}}
          />
          <button className='searchButton' type='button' onClick={getWeatherData}>
            Search</button>
        </div>
      </div>

       <WeatherCard {...tempInfo} />
     </div>

    </>
  )
}

export default App



// https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=4ed2494724e508791c9517109c19590c