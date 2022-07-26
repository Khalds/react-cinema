import React, { useEffect, useState } from "react"
import styles from "./Movie.module.css"
import { Link, useParams } from "react-router-dom"
import Calend from "../../Components/Calendar/Calend"
import { useDispatch, useSelector } from "react-redux"
import { getMovies } from "../../features/Movies/moviesSlice"
import ReactPlayer from "react-player"

import { BsFillPlayFill } from "react-icons/bs"
import { CgClose } from "react-icons/cg"
import MovieSessionList from "../../Components/MovieSessionList/MovieSessionList"

function Movie() {
  const movies = useSelector((state) => state.movieReducer.movies)
  const genres = useSelector((state) => state.genreReducer.genres)

  const [open, setOpen] = useState(false)

  const { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getMovies())
  }, [dispatch])

  return (
    <div className={styles.Movie}>
      <div className={styles.back_home}>
        <Link to="/"> &#x25C4; Все фильмы</Link>
      </div>
      <div className={styles.wrapper}>
        {!open &&
          movies.map((movie) => {
            if (movie._id === id)
              return (
                <div className={styles.movie_item}>
                  <div className={styles.movie_img}>
                    <img
                      src="https://reelcinemas.com//MovieImages/HO00002863.jpg"
                      alt="IMG"
                    />
                  </div>
                  <div className={styles.movie_info}>
                    <div className={styles.movie_title}>{movie.name}</div>
                    <div className={styles.movie_genre}>
                      {genres.map((genre, index) => {
                        if (movie.genre.includes(genre._id)) {
                          return <p>{genre.name}</p>
                        }
                      })}
                    </div>
                    <div className={styles.movie_meta_data}>
                      <div className={styles.movie_time}>{movie.length}</div>
                      <div className={styles.movie_country}>
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
                    <div className={styles.movie_actions}>
                      <button className={styles.btn_ticket}>BUY TICKET</button>
                      <button
                        onClick={(e) => setOpen(!open)}
                        className={styles.btn_play}
                      >
                        <BsFillPlayFill className={styles.play} />
                      </button>
                    </div>
                  </div>
                </div>
              )
          })}
        {open && (
          <>
            <ReactPlayer
              url="https://www.youtube.com/watch?v=pAr7v_9I78s"
              playing={true}
              controls={true}
              width="100%"
              height="100vh"
            />
            <button
              onClick={(e) => setOpen(!open)}
              className={styles.btn_close}
            >
              <CgClose className={styles.play} />
            </button>
          </>
        )}
      </div>

      <Calend />
      <div className={styles.MovieSession}>
        <MovieSessionList />
      </div>
    </div>
  )
}

export default Movie
