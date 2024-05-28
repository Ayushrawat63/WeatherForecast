import { useState, useEffect } from "react";


const data = new Date().toLocaleString();

function WeatherCard({
  temp,
  pressure,
  humidity,
  mood,
  name,
  speed,
  country,
  sunset,
}) {
  const [weatherMood, setWeatherMood] = useState("");

  useEffect(() => {
    if (mood) {
      switch (mood) {
        case "Clouds":
          setWeatherMood("wi-day-cloudy")
          break;
        case "Haze":
          setWeatherMood("wi-fog")
          break;
        case "Clear":
          setWeatherMood("wi-day-sunny")
          break;
        case "Mist":
          setWeatherMood("wi-dust")
          break;
        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }

  }, [mood])
  const celsiusDeg = (temp - 273.15).toFixed(2);
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <div className="widget">
        <div className="weatherIcon">
          <i className={`wi ${weatherMood}`}></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{celsiusDeg}&deg;C</span>
          </div>
          <div className="description">
            <div className="weatherCondition">{mood}</div>
            <div className="place">{name},{country}</div>
          </div>
        </div>
        <div className="date">{data}</div>

        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section1">
              <p><i className={"wi wi-sunset"}></i></p>
              <p className='extra-info-leftside'>
                {timeStr} PM <br />
                Sunset
              </p>
            </div>



            <div className="two-sided-section2">
              <p><i className={"wi wi-humidity"}></i></p>
              <p className='extra-info-leftside'>
                {humidity} <br />
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">

            <div className="two-sided-section1">
              <p><i className={"wi wi-rain"}></i></p>
              <p className='extra-info-leftside'>
                {pressure} <br />
                Pressure
              </p>
            </div>

            <div className="two-sided-section2">
              <p><i className={"wi wi-strong-wind"}></i></p>
              <p className='extra-info-leftside'>
                {speed} <br />
                speed
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


export default WeatherCard;