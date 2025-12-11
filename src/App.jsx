import { useRef, useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherInformations from "./components/WeatherInformations/WeatherInformations";
import WeatherInformationsForecast from "./components/WeatherInformationsForecast/WeatherInformationsForecast";

function App() {
  const [weather, setWeather] = useState();
  const [weatherForecast, setWeatherForecast] = useState();
  const inputRef = useRef();
  async function searchCity() {
    const city = inputRef.current.value;
    const Key = "4c552b29d293015b8d1978af9f3e9e42";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric&lang=pt_br`;
    const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${Key}&units=metric&lang=pt_br`;

    const apiInfo = await axios.get(url);
    const apiInfoForecast = await axios.get(urlForecast);

    setWeatherForecast(apiInfoForecast.data);
    setWeather(apiInfo.data);
  }
  return (
    <>
      <div className="container">
        <h1>Previsão do Tempo</h1>
        <input ref={inputRef} type="text" placeholder="Cidade" />
        <button onClick={searchCity}>Buscar</button>

        {weather && <WeatherInformations weather={weather} />}
        {weatherForecast && (
          <WeatherInformationsForecast weatherForecast={weatherForecast} />
        )}
      </div>
    </>
  );
}

export default App;
