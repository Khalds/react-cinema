import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { createBooking } from "../../features/Booking/bookingSlice";
import { getMovies } from "../../features/Movies/moviesSlice";
import { getSessionById } from "../../features/Sessions/sessionSlice";
import styles from "./Basket.module.css";

const Basket = () => {
  const chosedSeats = useSelector((state) => state.bookingReducer.chosedSeats);
  const session = useSelector((state) => state.sessionReducer.session);
  const dispatch = useDispatch();

 

  const handleClick = (arr) => {
    dispatch(createBooking(arr));
    dispatch(getSessionById(chosedSeats[0].session));
    dispatch(getMovies());
  };

  return (
    <div className={styles.main}>
      <h1>Ваш заказ</h1>
      <div className={styles.basket}>
        <div className={styles.order}>
          <div className={styles.session_time}>{session?.time}</div>
          {chosedSeats.map((seat) => {
            return (
              <>
                <div>{session.movie}</div>
                <div>{seat.row}</div>
                <div>{seat.col}</div>
              </>
            );
          })}
        </div>
        <div className={styles.sum}></div>
      </div>

      <div>
        <button onClick={() => handleClick(chosedSeats)}>КУПИТЬ БИЛЕТЫ</button>
      </div>
    </div>
  );
};

export default Basket;
