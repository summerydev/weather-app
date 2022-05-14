import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

interface Weather {
  id: any;
  name: string;
  weather: any;
  main: any;
  sys: any;
}
const apiKey = process.env.REACT_APP_API_KEY;

export default function Home() {
  // console.log(apiKey);

  // 초기값이 없어서 에러 -> 1. 초기값 부여 2. 없을 때를 제어
  const [weather, setWeather] = useState<Weather>();

  // useEffect : dom 준비된 후에 1번만 실행, []디펜던시 부여
  useEffect(() => {
    function success(pos: any) {
      let lat = pos.coords.latitude;
      let lon = pos.coords.longitude;
      const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
      console.log(url);

      fetch(url)
        .then((res) => res.json())
        .then((result) => {
          setWeather(result);
          console.log(weather);
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
        <>Error or Loading</>
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
