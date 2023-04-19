import React from "react";
import "./index.css";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";

const App = () => {
  return (
    <div className="App">
      <div className="home__section">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default App;
