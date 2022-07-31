import React, { useEffect } from "react"
import styles from "./Session.module.css"
import { NavLink } from "react-router-dom"
import { MdLanguage } from "react-icons/md"
import { IoMdTime } from "react-icons/io"

const MoviesInSession = ({ movies, session, genres, hall, value }) => {
  return (
    <>
      {movies.map((movie) => {
        if (movie._id === session.movie) {
          let date = new Date(Date.parse(session.time))

          if (
            date.getDay() === new Date().getDay() &&
            Date.parse(session.time) - Date.parse(new Date()) > 0
          )
            return (
              <>
                <h4>{movie.name}</h4>
                <div className={styles.card_middle_part}>
                  <div className={styles.img_container}>
                    <img src={movie.img}></img>
                  </div>
                  <div className={styles.genre_time_container}>
                    <div className={styles.meta_data}>
                      <div className={styles.country}>
                        <MdLanguage />
                        {movie.country}
                      </div>
                      <div className={styles.length}>
                        <IoMdTime />
                        {movie.length / 60 >= 1
                          ? Math.floor(movie.length / 60) + "ч "
                          : ""}
                        {movie.length % 60 > 0 ? (movie.length % 60) + "м" : ""}
                      </div>
                    </div>

                    <div className={styles.genre}>
                      {genres.map((genre) => {
                        if (movie.genre.includes(genre._id)) {
                          return <p className={styles.genre}>{genre.name} </p>
                        }
                      })}
                    </div>
                    <div className={styles.time_limitation}>
                      <div className={styles.time}>
                        {(date.getHours() < 10
                          ? "0" + date.getHours()
                          : date.getHours()) +
                          ":" +
                          (date.getMinutes() < 10
                            ? "0" + date.getMinutes()
                            : date.getMinutes())}
                      </div>
                      <div className={styles.limitation}>
                        {movie.limitation}+
                      </div>
                    </div>
                  </div>
                </div>
                <NavLink to={`/booking/${session._id}`}>
                  <button>Купить билет {hall.seatPrice + "P"}</button>
                </NavLink>
              </>
            )
        }
      })}
    </>
  )
}

export default MoviesInSession
