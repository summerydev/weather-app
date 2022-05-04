import { useState } from "react"; // why error?
import Home from "../pages/Home";

export interface weather {
  id: any;
  name: string;
  weather: any;
  main: any;
  sys: any;
}

const NowWeather = () => {
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);

  const [weather, setWeather] = useState<weather>();

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos: any) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(url);

    fetch(url)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        console.log(weather);
      });

    return (
      <>
        <Home weather={weather} />
      </>
    );
  }

  function error(err: any) {
    console.log(err);
    alert("sorry. Can't find you. Can't set current weather.");
  }
};

export default NowWeather();
