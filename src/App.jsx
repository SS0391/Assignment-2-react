import { useState } from "react";
import "./App.css";
import CookieClicker from "./Components/CookieClicker.jsx";
import CatFacts from "./Components/CatFacts.jsx";
function App() {
  return (
    <div>
      <h1>React assingment 2: useState and useEffect</h1>
      <div>
        <CookieClicker />
      </div>
      <div>
        <CatFacts />
      </div>
    </div>
  );
}

export default App;
