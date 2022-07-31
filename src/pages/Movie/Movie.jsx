import React, { useEffect, useState } from "react"
import styles from "./Movie.module.css"
import { Link, useParams } from "react-router-dom"
import Calend from "../../Components/Calend/Calend"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../features/Movies/moviesSlice"
import ReactPlayer from "react-player"

import { BsFillPlayFill } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import MovieSessionList from "../../Components/MovieSessionList/MovieSessionList"
import { IoMdTime } from "react-icons/io"
import { MdLanguage } from "react-icons/md"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"

function Movie() {
  const movies = useSelector((state) => state.movieReducer.movies)
  const genres = useSelector((state) => state.genreReducer.genres)

  const [value, onChange] = useState(new Date())

  const [open, setOpen] = useState(false)

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <>
      <Header />
      <div className={styles.Movie}>
        <div className={styles.back_home}>
          <Link to="/"> &#x25C4; Все фильмы</Link>
        </div>
        <div className={styles.wrapper}>
          {movies.map((movie) => {
            if (movie._id === id)
              return (
                <div key={movie._id} className={styles.movie_item}>
                  <div className={styles.movie_img}>
                    <img src={movie.img} alt="IMG" />
                  </div>
                  <div className={styles.movie_info}>
                    {!open && (
                      <>
                        <div className={styles.movie_title}>{movie.name}</div>
                        <div className={styles.movie_genre}>
                          {genres.map((genre) => {
                            if (movie.genre.includes(genre._id)) {
                              return <p>{genre.name}</p>
                            }
                          })}
                        </div>
                        <div className={styles.movie_meta_data}>
                          <div className={styles.movie_time}>
                            <IoMdTime />
                            {movie.length / 60 >= 1
                              ? Math.floor(movie.length / 60) < 10
                                ? "0" + Math.floor(movie.length / 60) + "ч "
                                : Math.floor(movie.length / 60)
                              : ""}
                            {movie.length % 60 > 0
                              ? (movie.length % 60) + "м"
                              : ""}
                          </div>
                          <div className={styles.movie_country}>
                            <MdLanguage />

                            {movie.country}
                          </div>
                          <div className={styles.movie_limit}>
                            {movie.limitation}+
                          </div>
                        </div>
                        <div className={styles.movie_producer}>
                          Director: {movie.producer}
                        </div>
                        <div className={styles.movie_descr}>
                          {movie.description}
                        </div>
                      </>
                    )}
                    {open && (
                      <>
                        <ReactPlayer
                          url={movie.trailer}
                          playing={true}
                          controls={false}
                          width="100%"
                        />
                      </>
                    )}
                    <div className={styles.movie_actions}>
                      <button className={styles.btn_ticket}>BUY TICKET</button>
                      <button
                        onClick={(e) => setOpen(!open)}
                        className={styles.btn_play}
                      >
                        {!open && <BsFillPlayFill className={styles.play} />}
                        {open && <CgClose className={styles.play} />}
                      </button>
                    </div>
                  </div>
                </div>
              )
          })}
        </div>

        <Calend value={value} onChange={onChange} />

        <div className={styles.MovieSession}>
          <MovieSessionList value={value} />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Movie
