import "./App.css";
import "@mantine/core/styles.css";
import Hero from "./pages/Hero/Hero";
import Login from "./pages/Login/Login";
import Routers from "./router/Router";

function App() {
  return (
    <div className="App">
      <Routers />
    </div>
  );
}

export default App;
