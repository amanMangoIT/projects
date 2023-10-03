import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Hero from "./Hero";
import Projects from "./Projects";
import { hydrate } from "react-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main>
        <Hero />
        <Projects />
      </main>
    </>
  );
}

export default App;
