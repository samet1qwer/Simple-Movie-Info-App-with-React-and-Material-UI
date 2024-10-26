import "./App.css";
import Footers from "./companents/Footers";
import Headers from "./companents/Headers";
import Router from "./router/Router";

function App() {
  return (
    <div>
      <Headers />
      <Router />
      <Footers />
    </div>
  );
}

export default App;
