import React, { useState } from "react"
import Slider from "react-slick"
import styles from "./MainSlider.module.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { NavLink } from "react-router-dom"

const MainSlider = ({ movies }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()

  return (
    <div className={styles.Slider}>
      <Slider asNavFor={nav2} ref={(slider1) => setNav1(slider1)}>
        {movies.map((movie) => {
          return (
            <>
              <div className={styles.main_slider}>
                <div className={styles.mainImg_conteiner}>
                  <img
                    src={movie.img_slider}
                    alt="photo"
                    className={styles.main_img}
                  ></img>
                </div>
                <div className={styles.movie_preview}>
                  <h1>{movie.name}</h1>
                  <p>
                    {movie.length / 60 >= 1
                      ? Math.floor(movie.length / 60) + "ч "
                      : ""}
                    {movie.length % 60 > 0 ? (movie.length % 60) + "мин" : ""}
                  </p>
                  <p className={styles.movie}>{`${movie.description}`}</p>
                  <NavLink to={`/movie/${movie._id}`}>
                    <button>Перейти</button>
                  </NavLink>
                </div>
              </div>
            </>
          )
        })}
      </Slider>
      <div className={styles.secondray_slide}>
        <Slider
          asNavFor={nav1}
          ref={(slider2) => setNav2(slider2)}
          slidesToShow={5}
          swipeToSlide={true}
          focusOnSelect={true}
        >
          {movies.map((movie) => {
            return (
              <div className={styles.card}>
                <div className={styles.sec_img_conteiner}>
                  <img
                    src={movie.img}
                    alt="topor"
                  ></img>
                </div>
              </div>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default MainSlider
