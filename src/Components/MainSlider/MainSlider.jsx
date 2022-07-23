import React from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.conteiner}>
      <Slider {...settings}>
        <div className={styles.card}>
          <div className={styles.img_conteiner}>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002908.jpg"
              alt="topor"
            ></img>
          </div>
          <p>MovieName</p>
          <p>Genre</p>
        </div>
        <div className={styles.card}>
          <div className={styles.img_conteiner}>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002908.jpg"
              alt="topor"
            ></img>
          </div>
          <p>MovieName</p>
          <p>Genre</p>
        </div>
      </Slider>
    </div>
  );
};

export default MainSlider;
