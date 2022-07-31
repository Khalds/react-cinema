import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"

import styles from "./MovieSession.module.css"
import { MdChair } from "react-icons/md"
import { GoScreenFull } from "react-icons/go"
import { ImTicket } from "react-icons/im"
import { getSessions } from "../../features/Sessions/sessionSlice"

function MovieSession({ hall, value }) {
  const movies = useSelector((state) => state.movieReducer.movies)
  const sessions = useSelector((state) => state.sessionReducer.sessions)

  const { id } = useParams()

  const dispatch = useDispatch()

  let date = null
  let filterDate = null
  let movieHour = null
  let movieMin = null

  useEffect(() => {
    dispatch(getSessions())
  }, [dispatch])

  return (
    <div className={styles.MovieSessions}>
      {movies.map((movie) => {
        return sessions.map((session) => {
          if (
            session.hall === hall._id &&
            movie._id === id &&
            movie._id === session.movie
          ) {
            date = new Date(Date.parse(session.time))

            movieHour =
              (movie.length % 60) + date.getMinutes() < 60
                ? date.getHours() +
                  (movie.length / 60 + date.getHours() >= 1
                    ? Math.floor(movie.length / 60)
                    : 0)
                : date.getHours() + Math.floor(movie.length / 60) + 1

            movieMin =
              (movie.length % 60) + date.getMinutes() < 60
                ? date.getMinutes() +
                  ((movie.length % 60) + date.getMinutes() > 0
                    ? movie.length % 60
                    : 0)
                : 0 + ((movie.length % 60) + date.getMinutes() - 60)

            filterDate =
              (date.getHours() < 10 ? "0" + date.getHours() : date.getHours()) +
              ":" +
              (date.getMinutes() < 10
                ? "0" + date.getMinutes()
                : date.getMinutes()) +
              " - " +
              ((movieHour < 24 ? movieHour : 0) < 10
                ? "0" + (movieHour < 24 ? movieHour : 0 + (movieHour - 24))
                : movieHour < 24
                ? movieHour
                : 0) +
              ":" +
              (movieMin < 10 ? "0" + movieMin : movieMin)
            if (
              value.getDate() === date.getDate() &&
              Date.parse(session.time) - Date.parse(new Date()) > 0
            )
              return (
                <div className={styles.movie_item}>
                  <div className={styles.movie_title}>{movie.name}</div>
                  <div className={styles.movie_data}>
                    <div className={styles.movie_time}>{filterDate}</div>
                    <div className={styles.movie_limit}>
                      {movie.limitation}+
                    </div>
                  </div>
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
                </div>
              )
          }
        })
      })}
    </div>
  )
}

export default MovieSession
