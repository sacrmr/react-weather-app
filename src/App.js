import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Hermanus" />
        <footer>
          <a
            className="info-link"
            href="https://github.com/sacrmr/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code {""}
          </a>
          on Github by Samantha Cramer
        </footer>
      </div>
    </div>
  );
}

export default App;
