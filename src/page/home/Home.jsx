import React from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Lists from "../../components/lists/Lists";

const Home = () => {
  return (
    <div className="home__container">
      <section className="home__wrapper">
        <Hero />
      </section>

      <section className="list__wrapper">
        <Lists />
      </section>
    </div>
  );
};

export default Home;
