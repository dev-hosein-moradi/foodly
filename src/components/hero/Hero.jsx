import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import Item2 from "../../assets/image/item2.png";
import Item3 from "../../assets/image/item3.png";
import Item4 from "../../assets/image/item4.png";
import HeroImg from "../../assets/image/hero2.jpg";
import Navbar from "../navbar/Navbar";
import Svginsta from "../../assets/Svgs/Svginsta";

const imageItems = [Item2, Item3, Item4];

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <Navbar />
        <section className="hero__content">
          <div className="content__text">
            <h1>به کافه فودلی خوش آمدید</h1>
            <h1>تلاش ما کسب رضایت شماست</h1>
          </div>

          <div className="content__img">
            <span></span>
            <span></span>
            <img src={HeroImg} alt="hero" />
            <span></span>
            <span></span>
          </div>

          <div className="content__social">
            <p>ما را در اینستاگرام دنیال کنید</p>
            <span>
              <Svginsta width={30} height={30} />
            </span>
            <button>مشاهده منو جهت سفارش</button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Hero;
