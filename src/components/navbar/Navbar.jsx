import React, { useState } from "react";
import "./navbar.css";
import SvgMenu from "../../assets/Svgs/SvgMenu";
import SvgClose from "../../assets/Svgs/SvgClose";
import Svginsta from "../../assets/Svgs/Svginsta";

const Navbar = () => {
  const [isAside, setIsAside] = useState(false);
  return (
    <div className="navbar__container">
      {/* content wrapper */}
      <div className="navbar__wrapper">
        {/* app brand */}
        <h1>فودلی</h1>

        {/* navbar links item */}
        <ul className={`navbar__items lg ${!isAside ? "close" : "open"}`}>
          <li>مشاهده لیست غذا</li>
          <li>درباره ما</li>
          <li>صحفه اصلی</li>
        </ul>

        {/* navbar toggler button */}
        <button onClick={() => setIsAside(!isAside)}>
          {!isAside ? (
            <SvgMenu width={40} height={40} />
          ) : (
            <SvgClose width={40} height={40} />
          )}
        </button>
      </div>

      {/* side bar menu for small screen */}
      <div className={`navbar__items sm ${isAside ? "open" : "close"}`}>
        <ul>
          <li>مشاهده لیست غذا</li>
          <li>درباره ما</li>
          <li>صحفه اصلی</li>
        </ul>

        <div className="social__box">
          <Svginsta width={45} height={45} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
