import React from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import styles from "./MovieSession.module.css"
import { MdChair } from "react-icons/md"
import { GoScreenFull } from "react-icons/go"
import { ImTicket } from "react-icons/im"

function MovieSession({ hall }) {
  const movies = useSelector((state) => state.movieReducer.movies)
  const { id } = useParams()

  return (
    <div className={styles.MovieSessions}>
      {movies.map((movie) => {
        if (movie._id === id)
          return (
            <>
              <div className={styles.hall_name}>
                <a href="">Grozny Cinema</a>
              </div>
              <div className={styles.movie_data}>
                <div className={styles.movie_time}>21:20 - 22:58</div>
                <div className={styles.movie_limit}>{movie.limitation}+</div>
              </div>
              <div className={styles.movie_title}>{movie.name}</div>
              <div className={styles.movie_hall_inf}>
                <div className={styles.movie_hall_num}>
                  <GoScreenFull /> {hall.name}
                </div>
                <div className={styles.movie_seats}>
                  <MdChair /> {hall.seats}
                </div>
                <div className={styles.movie_seat_price}>
                  <ImTicket /> 150Р
                </div>
              </div>
            </>
          )
      })}
    </div>
  )
}

export default MovieSession
