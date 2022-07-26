import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHalls } from "../../features/Halls/hallSlice"

import MovieSession from "../MovieSession/MovieSession"

import styles from "./MovieSessionList.module.css"

function MovieSessionList() {
  const halls = useSelector((state) => state.hallReducer.halls)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHalls())
  }, [dispatch])

  return (
    <div className={styles.MovieSessionList}>
      {halls.map((hall) => {
        return <MovieSession hall={hall} />
      })}
    </div>
  )
}

export default MovieSessionList
