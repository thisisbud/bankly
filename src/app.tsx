import reactLogo from "./assets/react.svg";
import "./App.css";
import { Home } from "./views/home";

const App = () => (
  <div className="app">
    <a href="https://www.thisisbud.com/" target="_blank" rel="noreferrer">
      <img src="/bud.svg" className="logo" alt="Bud logo" />
    </a>
    <a href="https://reactjs.org" target="_blank" rel="noreferrer">
      <img src={reactLogo} className="logo react" alt="React logo" />
    </a>
    <Home />
  </div>
);

export default App;
