import React, { useEffect } from "react";
import styles from "./Book.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  getSessionById,
  getSessions,
} from "../../features/Sessions/sessionSlice";
import { NavLink, useParams } from "react-router-dom";
import seatSlice, {
  getSeats,
  makeBooking,
} from "../../features/Seat/seatSlice";
import { useState } from "react";
import { MdOutlineChair } from "react-icons/md";
import Basket from "../Basket/Basket";
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

  const [purchase, setPurchase] = useState(false);
  const [sum, setSum] = useState(0);

  const rows = new Array(session?.hall?.row).fill(null);
  const cols = new Array(session?.hall?.column).fill(null);

  const { id } = useParams();

  const handleBuy = () => {
    setSum(sum + session.hall.seatPrice);
  };

  const handleChange = (row, col, session1) => {
    dispatch(choseSeat({ row, col, id }));
    // setSum(sum + session.hall.seatPrice)

  };

  useEffect(() => {
    dispatch(getSessionById(id));
    dispatch(getSeats());
    dispatch(getBooking());
    dispatch(getMovies());
  }, [dispatch]);

  return (
    <div className={styles.Book}>
      <div className={styles.session_info}>
        <div>
          <h1>
            {/* {movies.map((movie) => {
              if (session.movie === movie._id) {
                return movie.name;
              }
            })} */}
          </h1>
        </div>
      </div>
      <table>
        {rows.map((row, i) => {
          return (
            <tr>
              <td className={styles.left_rowName}>{i + 1}</td>
              {cols.map((col, j) => {
                const blocked = bookings.find((book) => {
                  if (book.col === j + 1 && book.row === i + 1) return true;

                  return false;
                });
                const chosed = chosedSeats.find((seat) => {
                  if (seat.col === j + 1 && seat.row === i + 1) return true;

                  return false;
                });
                return (
                  <td className={`${styles.seats_numbers} ${blocked&&styles.active}`}>
                    
                    <MdOutlineChair
                    aria-disabled={blocked}
                      onClick={() => handleChange(i + 1, j + 1, blocked)}
                      className={
                        blocked || chosed ? styles.active : styles.disactive
                      }
                      disabled = {blocked? true : false}
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
      <div className={styles.transition}>
        <NavLink to="/basket">
          <button>Перейти к оплате</button>
        </NavLink>
        <div>{session && sum}</div>
      </div>
      <div className={styles.line}>
        <h3>Экран</h3>
      </div>
    </div>
  );

  // const renderColumns = (row, column) => {
  //   const result = [];
  //   for (let j = 1; j <= column; j++) {
  //     result.push(
  //       <td
  //         key={j}
  //         onClick={() => handleClick(row, j)}
  //       >
  //         {j}
  //       </td>
  //     );
  //   }
  //   return result;
  // };

  // const renderRows = (row, column) => {
  //   let result = [];
  //   for (let i = 1; i <= row; i++) {
  //     result.push(<tr key={i}>{renderColumns(i, column)}</tr>);
  //   }
  //   return result;
  // };

  // return (
  //   <>
  //     {session && (
  //       <div className={styles.Book_conteiner}>
  //         <div className={styles.book}>
  //           <div>
  //             <table>{
  //               <tr>{renderRows(session.hall.row, session.hall.column)}</tr>
  //               }</table>
  //             {seats.map((element, index) => {
  //               return <div>{`Ряд ${index}`}</div>;
  //             })}
  //           </div>
  //           {seats.map((element, index) => {
  //             if (element.hall._id === session.hall._id)
  //               return (
  //                 <>
  //                   <div className={styles.seats_conteiner}>
  //                     <div>
  //                       {
  //                         <MdOutlineChair
  //                           onClick={() => handleClick(element._id, element)}
  //                           className={
  //                             element.isChosed || element.isBlocked
  //                               ? styles.active
  //                               : styles.disactive
  //                           }
  //                         />
  //                       }
  //                       {element.name + index}
  //                     </div>
  //                   </div>
  //                 </>
  //               );
  //           })}
  //           <div>
  //             {seats.map((element, index) => {
  //               return <div>{`Ряд ${index}`}</div>;
  //             })}
  //           </div>
  //         </div>
  //         <div className={styles.button_conteiner}>
  //           <button onClick={handleBuy}>Купить билеты</button>
  //         </div>

  //         {isActiveBasket && <Basket basket={basket} seats={seats} />}
  //       </div>
  //     )}
  //   </>
  // );
};

export default Book;

// {renderRows(session.hall.row, session.hall.column)}
