import React from "react";
import styles from "./Session.module.css";

const MoviesInSession = ({ movies, session, genres }) => {
  return (
    <>
      {movies.map((movie) => {
        if (movie._id === session.movie) {
          return (
            <>
              <h4>{movie.name}</h4>
              <div className={styles.card_middle_part}>
                <div className={styles.img_conteiner}>
                  <img src="https://cdn.mirage.ru/images/film/4000/small/p4925.jpg"></img>
                </div>
                <div className={styles.genre_time_conteiner}>
                  <div className={styles.genre}>
                    {genres.map((genre) => {
                      if (movie.genre.includes(genre._id)) {
                        return <p className={styles.genre}>{genre.name} </p>;
                      }
                    })}
                  </div>
                  <div className={styles.time_limitation}>
                    <div className={styles.time}>
                      {session.time.slice(11, 16)}
                    </div>
                    <div className={styles.limitation}>{movie.limitation}+</div>
                    <div className={styles.cinema}>2D</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}>
                <button>Приобрести билеты</button>
              </div>
            </>
          );
        }
      })}
    </>
  );
};

export default MoviesInSession;
