import { useState } from "react";

export default function Home() {
  const days = new Date();
  const [now, setNow] = useState([{}]);
  const apiKey = process.env.REACT_APP_API_KEY;
  console.log(apiKey);

  setNow([
    {
      month: days.getMonth(),
      date: days.getDate(),
      day: days.getDay(),
      hour: days.getHours(),
      minute: days.getMinutes(),
      second: days.getMilliseconds(),
    },
  ]);

  const [weather, setWeather] = useState<any[]>([{}]);

  navigator.geolocation.getCurrentPosition(success, error);

  function success(pos: any) {
    let lat = pos.coords.latitude;
    let lon = pos.coords.longitude;
    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}`;
    console.log(url);

    fetch(url) //
      .then((res) => res.json()) //
      .then((result) => {
        //
        setWeather(result);
        console.log(weather);
      });
  }

  function error(err: any) {
    console.log(err);
    alert("sorry. Can't find you. Can't set current weather.");
  }
  
// fetch 아직 안했는데 map 돌려버려서 오류?
  return (
    <div>
      {now && now.map((now: any) => <div key={now.second}>${now}</div>)}
      {/*  아이콘 코드  */}
      {weather &&
        weather.map((data: any) => (
          <p key={data.id}>
            <div>
              {data.name}
              {data.sys.country}
            </div>
            <div>
              <span>now</span>
              <span>{data.weather.main}</span>
              <span>{data.main.temp - 273}℃</span>
            </div>
            <div>
              <span>today</span>
              <span>최고 {data.main.temp_min - 273}℃</span>
              <span>최저 {data.main.temp_max - 273}℃</span>
            </div>
          </p>
        ))}
    </div>
  );
}
