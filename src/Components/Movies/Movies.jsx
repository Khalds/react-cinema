import React from 'react';
import styles from "./Movies.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Movies = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500
      };
    return (
        <div className={styles.Body}>
            <h1>Уже в кино</h1>
          <Slider {...settings}>
            <div>
                <h1>Проверка...</h1>
            </div>
            <div>
                <h1>1...</h1>
            </div>
            <div>
                <h1>2...</h1>
            </div>
            <div>
                <h1>3...</h1>
            </div>
            </Slider>
        </div>

    );
};

export default Movies;