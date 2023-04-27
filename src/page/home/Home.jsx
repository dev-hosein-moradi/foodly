import React from "react";
import "./home.css";
import Hero from "../../components/hero/Hero";
import Lists from "../../components/lists/Lists";
import Item2 from "../../assets/image/item2.png";
import Item3 from "../../assets/image/item3.png";
import Item4 from "../../assets/image/item4.png";

const Home = () => {
  return (
    <div className="home__container">
      <ul className="background">
        <li>
          <img className="bg__shapes1" src={Item2} alt="item" />
        </li>
        <li>
          <img className="bg__shapes2" src={Item3} alt="item" />
        </li>
        <li>
          <img className="bg__shapes3" src={Item4} alt="item" />
        </li>
        <li>
          <img className="bg__shapes1" src={Item2} alt="item" />
        </li>
        <li>
          <img className="bg__shapes2" src={Item3} alt="item" />
        </li>
        <li>
          <img className="bg__shapes3" src={Item4} alt="item" />
        </li>
        <li>
          <img className="bg__shapes1" src={Item2} alt="item" />
        </li>
        <li>
          <img className="bg__shapes2" src={Item3} alt="item" />
        </li>
      </ul>
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
