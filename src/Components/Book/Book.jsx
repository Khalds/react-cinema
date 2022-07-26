import React, { useEffect } from "react";
import styles from "./Book.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBooking } from "../../features/Booking/bookingSlice";

const Book = () => {
  const dispatch = useDispatch();

  const session_id = localStorage.getItem("Session_Id");

  const booking = useSelector((state) => state.bookingReducer.booking);

  const rows = new Array(booking.row).fill(null)
  const columns = new Array(booking.columns).fill(null)


  useEffect(() => {
    dispatch(getBooking());
  }, [dispatch]);

  return (
    <div className={styles.Book_conteiner}>
      <div className={styles.book}>
        <table className={styles.table}>

        {rows.map(row => {
            return <tr className={styles.tr}>
                {columns.map(column => {
                    <td className={styles.td}></td>
                })}
            </tr>
        })}
        </table>
      </div>
    </div>
  );
};

export default Book;
