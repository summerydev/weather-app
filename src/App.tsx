import AddWeather from "./components/AddWeather";
import CurrentWeather from "./components/CurrentWeather";
import Header from "./components/Header";
import Search from "./components/Search";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="weather">
        <CurrentWeather />
      </div>
      <AddWeather />
    </div>
  );
}

export default App;
