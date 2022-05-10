import { useEffect, useState } from "react";
import { resourceLimits } from "worker_threads";

export default function Search() {
  const handleSearch = () => {};
  const [city, setCity] = useState<string>("서울");
  let cities = [];
  const stream = new ReadableStream;
  const reader = stream.getReader();
let result = '';
  useEffect(() => {
    fetch(
      "grpc-proxy-server-mkvo6j4wsq-du.a.run.app"
    )
      .then((res) => {
          console.log(res)
      })
  }, []);
  return (
    <div>
      <form onSubmit={handleSearch}>
        <input type="text" placeholder="city name here"></input>
        <select
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
        ></select>
        <button type="submit">🔍</button>
      </form>
    </div>
  );
}
