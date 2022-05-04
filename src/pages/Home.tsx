import { weather } from "../components/NowWeather";

interface ResultProps {
  weather: weather;
}

export default function Home({ weather }: ResultProps) {
  return (
    <>
      {weather && (
        <p key={weather.id}>
          <div>
            {weather.name}
            {weather.sys.country}
          </div>
          <div>
            <span>now</span>
            <span>{weather.weather.main}</span>
            <span>{weather.main.temp - 273}℃</span>
          </div>
          <div>
            <span>today</span>
            <span>최고 {weather.main.temp_min - 273}℃</span>
            <span>최저 {weather.main.temp_max - 273}℃</span>
          </div>
        </p>
      )}
    </>
  );
}
