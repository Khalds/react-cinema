import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getMovies } from "../../features/Movies/moviesSlice";
import CardFilm from "../CardFilm/CardFilm";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import style from "./films.module.css";

const Films = () => {
  const dispatch = useDispatch("");
  const movies = useSelector((state) => state.movieReducer.movies);
  const [value, setValue] = useState("");

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const filteredMovies = movies.filter((item) => {
    return item.name.toLowerCase().includes(value.toLowerCase());
  });

  return (
    <>
      <Header />
      <div className={style.wrapperMain}>
        <h1 className={style.film}>Фильмы</h1>
        <div className={style.search}>
          <input
            type="text"
            placeholder="Search movie..."
            onChange={(e) => setValue(e.target.value)}
          />
        </div>

        {!filteredMovies.length ? (
          <div className={style.sector_clear}>
            <h2>Ничего не найдено...</h2>
          </div>
        ) : (
          <div className={style.netCardFilms}>
            {filteredMovies.map((item) => {
              return (
                <Link to={`/movie/${item._id}`}>
                  <CardFilm
                    key={item._id}
                    name={item.name}
                    img={item.img}
                    limitation={item.limitation}
                    genresId={item.genre}
                    movie={item}
                  />
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Films;
