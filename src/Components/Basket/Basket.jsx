import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { createBooking } from "../../features/Booking/bookingSlice";
import { makeBooking } from "../../features/Seat/seatSlice";
import { getSessions } from "../../features/Sessions/sessionSlice";
import styles from "./Basket.module.css";

const Basket = () => {
  const chosedSeats = useSelector((state) => state.bookingReducer.chosedSeats);
  const dispatch = useDispatch()

   console.log(chosedSeats)

  const handleClick = (arr) => {
      dispatch(createBooking(arr))
  }

  return (
    <div className={styles.main}>
           <div><button onClick={() => handleClick(chosedSeats)}>КУПИТЬ БИЛЕТЫ</button></div>
           {chosedSeats.map((seat) => {
            return (
                 <>
                 
                 <div>{seat.row}</div>
                 <div>{seat.col}</div>
                 </>
                 
            )
           })}
            {/* <h4>{movie.name}</h4> */}
              {/* <div className={styles.card_middle_part}>
                <div className={styles.img_conteiner}>
                  <img src="https://cdn.mirage.ru/images/film/4000/small/p4925.jpg"></img>
                </div>
                <div className={styles.genre_time_conteiner}>
                  <div className={styles.genre}>
                    {genres.map((genre) => {
                      if (movie.genre.includes(genre._id)) {
                        return <p className={styles.genre}>{genre.name} </p>;
                      }
                    })}
                  </div>
                  <div className={styles.time_limitation}>
                    <div className={styles.time}>
                      {session.time.slice(11, 16)}
                    </div>
                    <div className={styles.limitation}>{movie.limitation}+</div>
                    <div className={styles.cinema}>2D</div>
                  </div>
                </div>
              </div>
              <div className={styles.button}></div> */}
    </div>
  )
};

export default Basket;
