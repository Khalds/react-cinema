import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getHalls } from "../../features/Halls/hallSlice"
import { getSessions } from "../../features/Sessions/sessionSlice"

import MovieSession from "../MovieSession/MovieSession"

import styles from "./MovieSessionList.module.css"

function MovieSessionList({ value }) {
  const halls = useSelector((state) => state.hallReducer.halls)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHalls())
    dispatch(getSessions())
  }, [dispatch])

  return (
    <div className={styles.c}>
      <div className={styles.hall_name}>
        <a href="/">Grozny Cinema</a>
      </div>
      {halls.map((hall) => {
        return <MovieSession hall={hall} value={value} />
      })}
    </div>
  )
}

export default MovieSessionList
