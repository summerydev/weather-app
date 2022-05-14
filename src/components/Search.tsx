import { useEffect, useState } from "react";

export default function Search() {
  const handleSearch = () => {};
  const [city, setCity] = useState<string>("서울");
  let cities = [];

  useEffect(() => {
    fetch(
      "https://grpc-proxy-server-mkvo6j4wsq-du.a.run.app/v1/regcodes?regcode_pattern=*00000000"
    )
      .then((res) => {
        const reader = res.body.getReader(); // why err
        return new ReadableStream({
          start(controller) {
            return pump();

            function pump() { // why err
              return reader.read().then(({ done, value }) => {
                // 더이상 읽을수 있는 data가 없다면 스트림을 닫는다
                if (done) {
                  controller.close();
                  return;
                }
                // 다음 data chunk를 새로운 readable 스트림에 집어 넣음
                controller.enqueue(value);
                return pump();
              });
            }
          },
        });
      })
      .then((stream) => new Response(stream))
      .then((res) => res.json());
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
