import { useState } from "react";

import "./App.css";
import Card from "./components/Card.jsx";
import Grid from "./components/Grid.jsx";
import NavBar from "./components/NavBar.jsx";
import Intro from "./components/Intro.jsx";
import Footer from "./components/Footer.jsx";
import Filter from "./components/Filter.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar/>
      <Intro/>
      <Filter/>
      <Grid/>
      <Footer/>
    </>
  );
}

export default App;
