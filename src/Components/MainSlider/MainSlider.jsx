import React, { useState } from "react";
import Slider from "react-slick";
import styles from "./MainSlider.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = ( {movies}) => {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  return (
    <div className={styles.Slider}>
      <h2>Новинки</h2>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {movies.map(movie => {
          return (
            <>
            
            <div className={styles.main_slider}>
            <div className={styles.mainImg_conteiner}>
              <img
                src="https://reelcinemas.com/tridion/en-ae/Images/GrayMan-Hero_tcm307-146820.jpg"
                alt="topor"
                className={styles.img}
              ></img>
            </div>
          </div>
          <div className={styles.movie_preview}>
           <h1>{movie.name}</h1>
           <p>{movie.length}</p>
           <p className={styles.movie}>{`${movie.description.slice(0, 90)}...`}</p>
           <button>Приобрести билеты</button>
          </div>
            </>
       
        
          )
        })}
        
      </Slider>
      <div className={styles.secondray_slide}>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={3}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {movies.map(movie => {
            return (
              <div className={styles.card}>
              <div className={styles.img_conteiner}>
                <img
                  src="https://reelcinemas.com/tridion/en-ae/Images/Kira-Hero_tcm307-146815.jpg"
                  alt="topor"
                ></img>
              </div>
            </div>
            )
          })}
        </Slider>
      </div>
    </div>
  );
};

export default MainSlider;
