import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGenres } from "../../features/Genres/genreSlice";
import { getMovies } from "../../features/Movies/moviesSlice";
import style from "./cardFilm.module.css";

const CardFilm = ({ name, limitation, img }) => {
  const genres = useSelector((state) => state.genreReducer.genres);
  const movies = useSelector((state) => state.movieReducer.movies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
    dispatch(getGenres());
  }, [dispatch]);

  return (
    <div className={style.card}>
      <div className={style.card_image}>
        {<img src={`http://localhost:4000/${img}`} alt="topor"></img>}
      </div>
      <div className={style.card_description}>
        <p className={style.text_title}>{name}</p>
        <p className={style.text_body}>{limitation}+</p>
        <p className={style.text_body_ganre}>
          {movies.map((movie) => {
            return genres.map((genre) => {
              if (movie.genre.includes(genre._id)) {
                return genre.name + '/';
              }
            });
          })}
        </p>
      </div>
    </div>
  );
};

export default CardFilm;
