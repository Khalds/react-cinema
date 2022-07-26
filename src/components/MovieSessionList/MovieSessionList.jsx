import React from "react"
import { useDispatch, useSelector } from "react-redux"

import MovieSession from "../MovieSession/MovieSession"

import styles from "./MovieSessionList.module.css"

function MovieSessionList() {
  const halls = useSelector((state) => state.hallReducer.halls)

  const dispatch = useDispatch()

  return (
    <div className={styles.MovieSessionList}>
      {halls.map((hall) => {
        return <MovieSession hall={hall} />
      })}
    </div>
  )
}

export default MovieSessionList
