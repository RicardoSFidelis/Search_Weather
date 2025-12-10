import { useRef } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const inputRef = useRef();
  async function searchCity() {
    const city = inputRef.current.value;
    const Key = "4c552b29d293015b8d1978af9f3e9e42";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${Key}&units=metric&lang=pt_br`;

    const data = await axios.get(url).then((response) => {
      console.log(response.data);
    });
  }
  return (
    <>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder="Cidade" />
      <button onClick={searchCity}>Buscar</button>
    </>
  );
}

export default App;
