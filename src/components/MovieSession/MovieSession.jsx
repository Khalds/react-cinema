import React from "react"

import styles from "./MovieSession.module.css"

function MovieSession() {
  return (
    <div className={styles.MovieSession}>
      <div className={styles.hall_name}>Озерки</div>
      <div className={styles.movie_data}>
        <div className={styles.movie_time}>21:20 - 22:58</div>
        <div className={styles.movie_age}>16+</div>
      </div>
      <div className={styles.movie_title}>Открытое море: Монстр глубины</div>
      <div className={styles.movie_hall_inf}>
        <div className={styles.movie_hall_num}>Зал №4</div>
        <div className={styles.movie_seat_price}>150Р</div>
      </div>
    </div>
  )
}

export default MovieSession
