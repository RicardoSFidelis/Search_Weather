function WeatherInformations({ weather }) {
  console.log(weather);
  return <div>{<h2>{weather.name}</h2>}</div>;
}

export default WeatherInformations;
