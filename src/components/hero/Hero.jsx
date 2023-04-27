import React, { useEffect, useRef, useState } from "react";
import "./hero.css";

import HeroImg from "../../assets/image/hero2.jpg";
import Navbar from "../navbar/Navbar";
import Svginsta from "../../assets/Svgs/Svginsta";

const Hero = () => {
  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <Navbar />
        <section className="hero__content">
          <div className="content__text">
            <h1>به کافه فودلی خوش آمدید</h1>
            <h1>تلاش ما کسب رضایت شماست</h1>

            <div className="content__social lg">
              <p>ما را در اینستاگرام دنیال کنید</p>
              <span>
                <Svginsta width={30} height={30} />
              </span>
              <button>مشاهده منو جهت سفارش</button>
            </div>
          </div>

          <div className="content__img">
            <span></span>
            <span></span>
            <img src={HeroImg} alt="hero" />
            <span></span>
            <span></span>
          </div>

          <div className="content__social sm">
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
