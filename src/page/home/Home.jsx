import React, { useEffect, useRef } from "react";
import "./home.css";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className="home__container">
      <section className="home__wrapper">
        <Hero />
      </section>
    </div>
  );
};

export default Home;
