import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import styles from "./Movies.module.css"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import MainSlider from "../MainSlider/MainSlider"
import { getMovies } from "../../features/Movies/moviesSlice"
import { getGenres } from "../../features/Genres/genreSlice"
import { Link } from "react-router-dom"
import "../../App.css"
import CardFilm from "../CardFilm/CardFilm"

const Movies = () => {
  const dispatch = useDispatch()

  const movies = useSelector((state) => state.movieReducer.movies)
  const genres = useSelector((state) => state.genreReducer.genres)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  useEffect(() => {
    dispatch(getMovies())
    dispatch(getGenres())
  }, [dispatch])

  return (
    <div className={styles.Body}>
      <MainSlider movies={movies} />
      <div className={styles.movies}>
        <h1>Уже в кино</h1>
        <Slider {...settings} className="second_slider">
          {movies.map((item, index) => {
            return (
              <Link to={`/movie/${item._id}`}>
                  <CardFilm
                    key={item._id}
                    name={item.name}
                    img={item.img}
                    limitation={item.limitation}
                    genresId={item.genre}
                    movie={item}
                  />
                </Link>
            )
          })}
        </Slider>
      </div>
      <div className={styles.movies}>
        <h1>Топ рейтинга</h1>
        <Slider {...settings} className="third_slider">
          {movies.map((item, index) => {
            return (
              <Link to={`/movie/${item._id}`}>
                  <CardFilm
                    key={item._id}
                    name={item.name}
                    img={item.img}
                    limitation={item.limitation}
                    genresId={item.genre}
                    movie={item}
                  />
                </Link>
            )
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Movies
