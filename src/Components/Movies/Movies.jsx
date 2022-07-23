import React from "react";
import styles from "./Movies.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSlider from "../MainSlider/MainSlider";

const Movies = () => {
 

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <div className={styles.Body}>
      <MainSlider />
      <h1>Уже в кино</h1>
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
          <div>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002836.jpg"
              alt="yellow"
            ></img>
          </div>
          <p>MovieName</p>
          <p>Genre</p>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002879.jpg"
              alt="img"
            ></img>
          </div>
          <p>MovieName</p>
          <p>Genre</p>
        </div>
        <div className={styles.card}>
          <div>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002895.jpg"
              alt="img"
            ></img>
          </div>
          <p>MovieName</p>
          <p>Genre</p>
        </div>
      </Slider>
    </div>
  );
};

export default Movies;
