import React from "react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getGenres } from "../../features/Genres/genreSlice"
import { getHalls } from "../../features/Halls/hallSlice"
import { getMovies } from "../../features/Movies/moviesSlice"
import { getSessions } from "../../features/Sessions/sessionSlice"
import Footer from "../Footer/Footer"
import MoviesInSession from "./MoviesInSession"
import styles from "./Session.module.css"

const Sessions = () => {
  const dispatch = useDispatch()

  const halls = useSelector((state) => state.hallReducer.halls)
  const sessions = useSelector((state) => state.sessionReducer.sessions)
  const movies = useSelector((state) => state.movieReducer.movies)
  const genres = useSelector((state) => state.genreReducer.genres)

  useEffect(
    (id) => {
      dispatch(getSessions(id))
      dispatch(getHalls())
      dispatch(getMovies())
      dispatch(getGenres())
    },
    [dispatch]
  )

  return (
    <>
      <div className={styles.Sessions}>
        {halls.map((hall) => {
          return (
            <>
              <div className={styles.hall}>
                <h1>{hall.name}</h1>
                <div className={styles.cards_container}>
                  {sessions.map((session) => {
                    if (session.hall === hall._id) {
                      return (
                        <div className={styles.card}>
                          <MoviesInSession
                            hall={hall}
                            movies={movies}
                            session={session}
                            genres={genres}
                          />
                        </div>
                      )
                    }
                  })}
                </div>
              </div>
            </>
          )
        })}
      </div>
      <Footer />
    </>
  )
}

export default Sessions
