import React, { useEffect } from "react";
import styles from "./Book.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getSessionById,
  getSessions,
} from "../../features/Sessions/sessionSlice";
import { NavLink, useParams } from "react-router-dom";

import { useState } from "react";
import { MdOutlineChair } from "react-icons/md";

import {
  choseSeat,
  createBooking,
  getBooking,
} from "../../features/Booking/bookingSlice";
import { getMovies } from "../../features/Movies/moviesSlice";

const Book = () => {
  const dispatch = useDispatch();

  const session = useSelector((state) => state.sessionReducer.session);
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const chosedSeats = useSelector((state) => state.bookingReducer.chosedSeats);
  const movies = useSelector((state) => state.movieReducer.movies);

  const user = localStorage.getItem("user");
  const token = localStorage.getItem("token")

  const { id } = useParams();
  const [sum, setSum] = useState(0);

  const rows = new Array(session?.hall?.row).fill(null);
  const cols = new Array(session?.hall?.column).fill(null);

  const handleBuy = (arr) => {
    dispatch(createBooking(arr));
    setSum(sum + session.hall.seatPrice);
  };

  const handleChange = (row, col, session1, userId) => {
    dispatch(choseSeat({ row, col, id, user }));
    if (
      !chosedSeats.find((seat) => {
        if (seat.row === row && seat.col === col) {
          return true;
        }
        return false;
      })
    ) {
      setSum(sum + session.hall.seatPrice);
    }
  };

  useEffect(() => {
    dispatch(getSessionById(id));
    dispatch(getBooking());
    dispatch(getMovies());
    dispatch(getSessions());
  }, [dispatch]);

  if (session) {
    return (
      <div className={styles.Book}>
        <div className={styles.session_info}>
          <div className={styles.movieName_conteiner}>
            <h1>
              {movies.map((movie) => {
                if (session.movie === movie._id) {
                  return movie.name;
                }
              })}
            </h1>
          </div>
          <div className={styles.hallName_conteiner}>
            <h3>{session.hall.name}</h3>
          </div>
          <div className={styles.seatPrice_conteiner}>
            <h5>
              <MdOutlineChair /> {session.hall.seatPrice}р
            </h5>
          </div>
          <div className={styles.time_price_conteiner}>
            <div className={styles.sessionDate_conteiner}>
              <h5>
                {session.time.slice(5, 7) +
                  "." +
                  session.time.slice(8, 10) +
                  " " +
                  session.time.slice(11, 16)}
              </h5>
            </div>
            <div className={styles.transition}>
              <NavLink to="/personal" className={styles.button_text}>
                <button
                  disabled={(chosedSeats.length > 0 && token)? false : true}
                  onClick={() => handleBuy(chosedSeats)}
                >
                  Оплатить {session && sum} ₽
                </button>
              </NavLink>
            </div>
          </div>
        </div>
        <table>
          {rows.map((row, i) => {
            return (
              <tr>
                <td className={styles.left_rowName}>{i + 1}</td>
                {cols.map((col, j) => {
                  const blocked = bookings.find((book) => {
                    if (
                      book.col === j + 1 &&
                      book.row === i + 1 &&
                      book.session === id
                    )
                      return true;

                    return false;
                  });
                  const chosed = chosedSeats.find((seat) => {
                    if (seat.col === j + 1 && seat.row === i + 1) return true;

                    return false;
                  });
                  return (
                    <td
                      className={`${styles.seats_numbers} ${
                        blocked && styles.active
                      }`}
                    >
                      <MdOutlineChair
                        aria-disabled={blocked}
                        onClick={() => handleChange(i + 1, j + 1, blocked)}
                        className={
                          blocked || chosed ? styles.active : styles.disactive
                        }
                        disabled={blocked ? true : false}
                      />
                      <p> {j + 1}</p>
                    </td>
                  );
                })}
                <td className={styles.right_rowName}>{i + 1}</td>
              </tr>
            );
          })}
        </table>

        <div className={styles.line}>
          <h3>Экран</h3>
        </div>
      </div>
    );
  }
};

export default Book;
