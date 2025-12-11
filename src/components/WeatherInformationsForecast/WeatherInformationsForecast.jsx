import "./WeatherInformationsForecast.css";

function WeatherInformationsForecast({ weatherForecast }) {
  console.log(weatherForecast);

  let dailyForecast = {};

  for (let forecast of weatherForecast.list) {
    const date = new Date(forecast.dt * 1000).toLocaleDateString();

    if (!dailyForecast[date]) {
      dailyForecast[date] = forecast;
    }
  }

  const next5DaysForecast = Object.values(dailyForecast).slice(1, 6);

  function convertDate(date) {
    const newDate = new Date(date.dt * 1000).toDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
    });
    return newDate;
  }

  return (
    <div className="weather-container">
      <p>Previsão para os próximos 5 dias</p>
      {next5DaysForecast.map((forecast) => (
        <div key={forecast.dt}>
          <p>{convertDate(forecast)}</p>
          <img
            src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
            alt={forecast.weather[0].description}
          />
          <p>{forecast.weather[0].description}</p>
          <p>
            {Math.round(forecast.main.temp_min)}ºC Min /{" "}
            {Math.round(forecast.main.temp_max)}ºC Max
          </p>
        </div>
      ))}
    </div>
  );
}

export default WeatherInformationsForecast;
