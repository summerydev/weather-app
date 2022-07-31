import { useEffect, useState } from "react";
import styled, { css } from "styled-components";

const apiKey = process.env.REACT_APP_API_KEY;

interface Weather {
  id: any;
  name: string;
  weather: any;
  main: any;
  sys: any;
}

export default function Search() {
  const url: string = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}`;
  //"https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"

  const [city, setCity] = useState<string>();
  const [weather, setWeather] = useState<Weather>();

  const handleSearch = () => {
    try {
      fetch(url)
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          console.log(res);
          setWeather(res);
        });
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <Card>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="도시를 검색해보세요!"
            value={city}
            onChange={(e) => {
              setCity(e.target.value);
            }}
          ></input>
          <button type="submit">추가하기</button>
        </form>
      </Card>
    </div>
  );
}

const Card = styled.div`
  display: block;
  text-align: center;
  border-radius: 10px;
  background-color: white;
  width: 300px;
  height: 30px;
  padding: 10px;
  margin: 10px 65px;
`;
