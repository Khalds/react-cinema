import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../features/Genres/genreSlice"
// import { getMovies } from "../../features/Movies/moviesSlice";
import style from "./cardFilm.module.css"

const CardFilm = ({ name, limitation, img, movie }) => {
  const genres = useSelector((state) => state.genreReducer.genres)
  // const movies = useSelector((state) => state.movieReducer.movies);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getGenres())
  }, [dispatch])

  return (
    <div className={style.card}>
      <div className={style.card_image}>{<img src={img}></img>}</div>
      <div className={style.card_description}>
        <div className={style.text_title}>{name}</div>
        <p className={style.text_body_ganre}>
          {genres.map((genre) => {
            if (movie.genre.includes(genre._id)) {
              return <p>{genre.name}</p>
            }
          })}
        </p>
        <p className={style.text_body}>{limitation}+</p>
      </div>
    </div>
  )
}

export default CardFilm
