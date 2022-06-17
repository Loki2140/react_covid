import "./App.css";
import { CountryList } from "./components/countryList/CountryList";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <CountryList />
    </div>
  );
}

export default App;
