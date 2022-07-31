import { useEffect, useState } from "react";
import styled from "styled-components";

const apiKey = process.env.REACT_APP_API_KEY;

interface Weather {
  id: any;
  name: string;
  weather: any;
  main: any;
  sys: any;
}

export default function CurrentWeather() {
  const [weather, setWeather] = useState<Weather>();

  useEffect(() => {
    function success(pos: any) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
        });
    }

    function error(err: any) {
      console.log(err);
      alert("sorry. Can't find you. Can't set current weather.");
    }
    navigator.geolocation.getCurrentPosition(success, error);
  }, []);

  return (
    <Card>
      {weather && weather.id ? (
        <div key={weather.id}>
          <div>
            <h2>
              {weather.name} {weather.sys.country}
            </h2>
          </div>
          <br />
          <div>
            <h1>Now {Math.floor(weather.main.temp - 273)}℃</h1>
            <h2>{weather.weather[0].main}</h2>
          </div>
          <Sun>
            <span>
              ☀️ {new Date(weather.sys.sunrise * 1000).toLocaleTimeString("kr")}
            </span>{" "}
            <span>
              🌙 {new Date(weather.sys.sunset * 1000).toLocaleTimeString("kr")}
            </span>
          </Sun>
        </div>
      ) : (
        <h2>현재 날씨를 찾고 있어요!</h2>
      )}
    </Card>
  );
}

const Card = styled.div`
  display: block;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  width: 300px;
  height: 300px;
  padding: 10px;
  margin: auto;
`;

const Sun = styled.div`
  position: relative;
  top: 50px;
`;
