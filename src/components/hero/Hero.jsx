import React, { useEffect, useRef, useState } from "react";
import "./hero.css";
import Item2 from "../../assets/image/item2.png";
import Item3 from "../../assets/image/item3.png";
import Item4 from "../../assets/image/item4.png";
import HeroImg from "../../assets/image/hero2.jpg";

const imageItems = [Item2, Item3, Item4];

const Hero = () => {
  const el = useRef();
  const [imgCounter, setImgCounter] = useState(0);

  useEffect(() => {
    const currentImg = el?.current;
  }, [el?.current]);

  const updateCounter = () => {
    if (imgCounter !== 2) {
      setImgCounter(imgCounter + 1);
    } else {
      setImgCounter(0);
    }
  };

  useEffect(() => {
    const increaseImgCounter = setInterval(updateCounter, 7000);

    return () => {
      clearInterval(increaseImgCounter);
    };
  }, [imgCounter]);

  return (
    <div className="hero__container">
      <div className="hero__wrapper">
        <div className="hero__content">
          <h1>لذت چشیدن طعم واقعی را با ما تجربه کنید</h1>
          <div className="hero__img__wrapper">
            <span></span>
            <span></span>
            <span></span>

            <img src={HeroImg} alt="hero" />
          </div>
          {/* <p>ما به شما بهترین راه خوردن غذای سالم را پیشنهاد می کنیم</p> */}
        </div>

        <div className="hero__image-slider">
          {[...imageItems, ...imageItems, ...imageItems]?.map(
            (image, index) => {
              let offset = imgCounter - index;
              return (
                <img
                  className={`image__hero ${index}`}
                  ref={el}
                  key={index}
                  data-active={offset === 0 ? true : null}
                  offset={offset}
                  src={image}
                  alt="item"
                  style={{
                    "--offset": offset,
                    "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
                  }}
                />
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;
