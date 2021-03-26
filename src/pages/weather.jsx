import React, {useState} from 'react';
import './stylesheet.css';
import './reset.css';

const api = {
  key:"7248eff058ba1f79c53e30c2ba0fac6e",
  base:"https://api.openweathermap.org/data/2.5/"
}

const WeatherPage=() => {
  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState('');

  
  const search = evt => {
    if (evt.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div className="app">
      <div>
        <a href='/'>Back to Home</a>
       </div>
      <main>
        <div className="searchBox">
          <input
            type="text"
            className="searchBoxInput"
            placeholder="Enter destination..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {(typeof weather.main != "undefined") ? (
          <div>
            <div className="weather">
              <div className="temperature">
                <p>{weather.name}, {weather.sys.country}</p>
                {Math.round(weather.main.temp)}°c
                <p>{weather.weather[0].description}</p>
                <p>hi: {Math.round(weather.main.temp_max)}° lo: {Math.round(weather.main.temp_min)}°</p>
              </div>
            </div>
            <div className="hourlyForecast">
              <table>
                <tr className="center">
                  <td>Now</td>
                  <td className="leftBorder">18</td>
                  <td className="leftBorder">19</td>
                  <td className="leftBorder">20</td>
                </tr>
                <tr className="center">
                  <td>11°</td>
                  <td className="leftBorder">8°</td>
                  <td className="leftBorder">6°</td>
                  <td className="leftBorder">5°</td>
                </tr>
                <tr className="center">
                  <td>2%</td>
                  <td className="leftBorder">0%</td>
                  <td className="leftBorder">0%</td>
                  <td className="leftBorder">0%</td>
                </tr>
              </table>
            </div>
            <div className="rainhumidity">
              <table>
                <tr>
                  <td>Chance of rain</td>
                  <td>Humidity</td>
                </tr>
                <tr>
                  <td className="bigFont">2%</td>
                  <td className="bigFont">62%</td>
                </tr>
              </table>
            </div>
            <div className="sunsetrise">
              <table>
                <tr>
                  <td>Sunrise</td>
                  <td>Sunset</td>
                </tr>
                <tr>
                  <td className="bigFont">06:49</td>
                  <td className="bigFont">17:37</td>
                </tr>
              </table>
            </div>
            <div className="windpressure">
              <table>
                <tr>
                  <td>Wind</td>
                  <td>Pressure</td>
                </tr>
                <tr>
                  <td className="bigFont">2 mph</td>
                  <td className="bigFont">1041</td>
                </tr>
              </table>
            </div>
          </div>
        ) : 
        (
          <div>
            <div className="enterDestination">
              Enter destination to get weather information
            </div>
          </div>
          
        )}
      </main>
    </div>
  );
}



export default WeatherPage;