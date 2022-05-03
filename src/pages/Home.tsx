import { geolocation } from navigator;

export default function Home() {
  const [now, setNow] = useState({
    month,
    date,
    day,
    hour,
    minute,
    second,
  });

  setInterval(() => {
    const date = new Date();
    setNow(
      month = date.getmonth(),
      date = date.getDate(),
      day = date.getDay(),
      hour = date.getHours(),
      minute = date.getMinutes(),
      second = date.getMilliseconds(),
    )
  }, 60000);

  const [weather, setWeather] = useState({});
  const [location, setLocation] = useState({
    lat,
    lon,
  });

  function success(pos) {
    const { latitude, longitude } = pos.coords;
    setLocation({
      latitude,
      longitude,
    })
    console.log(location);

    const url: string = `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${process.env.REACT_APP_API_KEY}`;

    fetch(url) //
      .then(res => res.json()) //
      .then(result => { //
        setWeather();
        console.log(weather);
      })
  };

  function error(err) {
    console.log(err);
    alert("sorry. Can't find you. Can't set current weather.");
  }

  return
  (<>
    ${weather.map((data) => (
      <p key={data.id}>
        <div>
          ${data.name}
          ${data.sys.country}
        </div>
        ${now.map((now => (
          <div key={now.second}>
            ${now}
          </div>
        )))}
        {/*  여기에 아이콘 들어갈 코드  */}
        <div>
          <span>now</span>
          <span>${data.weather.main}</span>
          <span>${data.main.temp - 273}℃</span>
        </div>
        <div>
          <span>today</span>
          <span>최고 ${data.main.temp_min}℃</span>
          <span>최저 ${data.main.temp_max}℃</span>
        </div>
      </p>
    ))}
  </>)
    ;
}
geolocation.getCurrentPosition(success, error, options);
