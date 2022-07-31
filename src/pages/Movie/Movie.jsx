import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";
import styles from "./Movie.module.css";
import { Link, useParams } from "react-router-dom";
import Calend from "../../Components/Calendar/Calend";
import { useDispatch, useSelector } from "react-redux";
import { getMovies } from "../../features/Movies/moviesSlice";
import ReactPlayer from "react-player";

import { BsFillPlayFill } from "react-icons/bs";
import { CgClose } from "react-icons/cg";
import MovieSessionList from "../../Components/MovieSessionList/MovieSessionList";
import { addRating, getRating } from "../../features/Rating/ratingsSlice";

function Movie() {
  const { id } = useParams();

  const movie = useSelector((state) =>
    state.movieReducer.movies.find((movie) => {
      if (movie._id === id) return true;

      return false;
    })
  );
  const genres = useSelector((state) => state.genreReducer.genres);
  const [open, setOpen] = useState(false);
  const [rating, setRating] = useState(false);
  const [sent, setSent] = useState(false);

  const dispatch = useDispatch();

  const movieRating =
    movie?.ratings?.reduce((acc, rate) => {
      return acc + rate.rate;
    }, 0) / movie?.ratings?.length;

  const handleClick = (rating) => {
    dispatch(addRating({ rating, id }));
    setRating(true);
    setSent(true);
  };

  useEffect(() => {
    dispatch(getRating());
    dispatch(getMovies());
  }, [dispatch]);

  if (!movie) {
    return "Loading";
  }

  return (
    <div className={styles.Movie}>
      <div className={styles.back_home}>
        <Link to="/"> &#x25C4; Главное меню</Link>
      </div>

      <div className={styles.wrapper}>
        {!open && (
          <div className={styles.movie_item}>
            <div className={styles.movie_img}>
              <img
                src="https://reelcinemas.com//MovieImages/HO00002863.jpg"
                alt="IMG"
              />
            </div>

            <div className={styles.movie_info}>
              <div className={styles.movie_title}>{movie.name}</div>
              <div onClick={handleClick} className={styles.allRating}>
                Общий рейтинг фильма:
                <div>{movieRating}</div>
              </div>
              <div className={styles.movie_genre}>
                {genres.map((genre, index) => {
                  if (movie.genre.includes(genre._id)) {
                    return <p>{genre.name}</p>;
                  }
                })}
              </div>

              <div className={styles.movie_meta_data}>
                <div className={styles.movie_time}>{movie.length}</div>
                <div className={styles.movie_country}>{movie.country}</div>
                <div className={styles.movie_limit}>{movie.limitation}+</div>
              </div>
              <div className={styles.movie_producer}>
                Director: {movie.producer}
              </div>

              <div className={styles.movie_descr}>{movie.description}</div>
              <div className={styles.movie_actions}>
                <button className={styles.btn_ticket}>BUY TICKET</button>

                <button
                  onClick={(e) => setOpen(!open)}
                  className={styles.btn_play}
                >
                  <BsFillPlayFill className={styles.play} />
                </button>
              </div>

              <div className={styles.ratingArea}>
                <Rating
                  name="simple-controlled"
                  value={rating}
                  size="large"
                  onChange={(e) => setRating(e.target.value)}
                />
                <button
                  className={styles.clickSent}
                  onClick={() => handleClick(rating)}
                  disabled={sent}
                >
                  <span>
                    {sent ? (
                      <div className={(styles.sentButton)}>
                        Отправлено
                      </div>
                    ) : (
                      <div className={styles.sentedButton}>Отправить</div>
                    )}
                  </span>
                </button>
              </div>
            </div>
          </div>
        )}
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
  );
}

export default Movie;
