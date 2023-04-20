import React, { useEffect, useRef } from "react";
import "./lists.css";
import hero1 from "../../assets/image/hero1.jpg";

const fastFood = [
  {
    id: 1001,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1002,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1003,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1004,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1005,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1006,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
  {
    id: 1007,
    title: "پیتزا",
    desc: "گوشت گوساله 100 گرم - بیکن 50 گرم - قارچ - فلفل دلمه",
    price: "196000",
    image: hero1,
  },
];

const Lists = () => {
  const item = useRef();

  useEffect(() => {
    console.log(item);
  }, [item]);
  return (
    <div className="list__container">
      <h1>منو کافه</h1>
      <section className="lists__wrapper">
        {/* list 1 */}
        <div className="list__box 1th">
          <h3>فست فود</h3>

          <span className="shadow-span top"></span>
          <div className="list__items">
            {fastFood?.map((food, i) => {
              let offset = fastFood.length + i;
              return (
                <div
                  ref={item}
                  key={i}
                  className="item"
                  offset={offset}
                  style={{
                    backgroundImage: `url(${hero1})`,
                    "--offset": offset,
                    "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
                  }}
                  data-active={offset === 0 ? true : null}
                >
                  <div className="item__content">
                    <h1>{food?.title}</h1>
                    <h6>ترکیبات</h6>
                    <p>{food?.desc}</p>
                    <p>
                      تومان {food?.price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          <span className="shadow-span bottom"></span>
        </div>

        {/* list 2 */}
        <div className="list__box 1th">
          <h3>فست فود</h3>

          <span className="shadow-span top"></span>
          <div className="list__items"></div>
          <span className="shadow-span bottom"></span>
        </div>
      </section>
    </div>
  );
};

export default Lists;
