import React from "react"
import styles from "./MovieDiscrCard.module.css"
import { BsFillPlayFill } from "react-icons/bs"
import { Link } from "react-router-dom"
// import Calendar from "../../components/Calendar/Calendar"

function MovieDiscrCard() {
  // const rows = new Array(hall.rows).fill(null)
  return (
    <div className={styles.MovieDiscrCard}>
      <Link to="/"> &#x25C4; Все фильмы</Link>
      <div className={styles.wrapper}>
        <div className={styles.movie_item}>
          <div className={styles.movie_img}>
            <img
              src="https://reelcinemas.com//MovieImages/HO00002863.jpg"
              alt="IMG"
            />
          </div>
          {/* {rows.map(() => {
            cols.map
          })} */}
          <div className={styles.movie_info}>
            <div className={styles.movie_title}>Thor: Love And Thunder</div>
            <div className={styles.movie_genre}>
              <p>ACTION | ADVENTURE | FANTASY</p>
            </div>
            <div className={styles.movie_meta_data}>
              <div className={styles.movie_time}>2hr | 0min</div>
              <div className={styles.movie_country}>ENGLISH</div>
            </div>
            <div className={styles.movie_producer}>Director: Taika Waititi</div>
            <div className={styles.movie_cast}>
              Cast: Chris Hemsworth, Natalie Portman, Karen Gillan, Chris Pratt,
              Christian Bale
            </div>
            <div className={styles.movie_discr}>
              Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane
              Foster to fight Gorr the God Butcher, who intends to make the gods
              extinct.
            </div>
            <div className={styles.movie_actions}>
              <button className={styles.btn_ticket}>BUY TICKET</button>
              <button className={styles.btn_play}>
                <BsFillPlayFill className={styles.play} />
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <Calendar /> */}
    </div>
  )
}

export default MovieDiscrCard
