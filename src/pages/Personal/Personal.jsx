import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import { getBooking } from "../../features/Booking/bookingSlice";
import { getHalls } from "../../features/Halls/hallSlice";
import { getMovies } from "../../features/Movies/moviesSlice";
import { getSessions } from "../../features/Sessions/sessionSlice";
import styles from "./Personal.module.css";
const Personal = () => {
  const bookings = useSelector((state) => state.bookingReducer.bookings);
  const sessions = useSelector((state) => state.sessionReducer.sessions);
  const movies = useSelector((state) => state.movieReducer.movies);
  const halls = useSelector((state) => state.hallReducer.halls);
  const dispatch = useDispatch();

  const user_id = localStorage.getItem("user");

  useEffect(() => {
    dispatch(getBooking());
    dispatch(getSessions());
    dispatch(getMovies());
    dispatch(getHalls());
  }, [dispatch]);

  return (
    <div className={styles.border}>
      <Header />
      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.personalPage}>Личный кабинет</h1>
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_data}>
            <img
              className={styles.avatar}
              src="https://pngimage.net/wp-content/uploads/2019/05/location-icon-png-black-and-white-1.png"
              alt="тут должна была быть фотoграфия..."
            ></img>
            <div className={styles.userName}>
              <div className={styles.login}>login: Khalid</div>
              <div className={styles.password}>Nick-Name: Khald</div>
            </div>
          </div>
          <div className={styles.details}>
            Хочу быть в курсе
            <div className={styles.description}>
              Узнавай о новинках кино и специальных предложениях самым первым!
              Еженедельно мы сообщаем о новинках кинопроката, эксклюзивных
              показах, скидках и акциях.
            </div>
            <div>
              <input type="checkbox" className={styles.getEmail} />
              Получать email-сообщения
            </div>
          </div>
        </div>
        <table className={styles.orders}>
          <thead>
            <th>Фильм</th>
            <th>Время сеанса</th>
            <th>Зал</th>
            <th>Место</th>
          </thead>
          {bookings.map((booking) => {
            if (booking.user === user_id) {
              return (
                <tr>
                  {sessions.map((session) => {
                    if (session._id === booking.session) {
                      return (
                        <>
                          {movies.map((movie) => {
                            if (movie._id === session.movie) {
                              return (
                                <>
                                  {halls.map((hall) => {
                                    if (hall._id === session.hall) {
                                      return (
                                        <>
                                          <td>{movie.name}</td>
                                          <td>
                                            {" "}
                                            {session.time.slice(8, 10) +
                                              "." +
                                              session.time.slice(5, 7) +
                                              " " +
                                              session.time.slice(11, 16)}
                                          </td>
                                          <td>{hall.name}</td>
                                          <td>
                                            {booking.row + " ряд "}
                                            {booking.col + " место "}
                                          </td>
                                        </>
                                      );
                                    }
                                  })}
                                </>
                              );
                            }
                          })}
                        </>
                      );
                    }
                  })}
                </tr>
              );
            }
          })}
        </table>
        <div className={styles.textSupport}>
          Остались вопросы? Можете связаться с нами
        </div>
        <div className={styles.support}>
          <a href="https://vk.com/">
            <img
              className={styles.vk}
              src="https://i.pinimg.com/736x/6c/bf/9e/6cbf9e8fd2edb84e0c2073506ec32923.jpg"
              alt="тут должна была быть иконка"
            />
          </a>
          <a href="https://t.me/+goIedgxeFqJlMTZi">
            <img
              className={styles.discord}
              src="https://i.pinimg.com/736x/64/fe/2f/64fe2f37e9f02b193e225f7b69ce19a9.jpg"
              alt="тут должна была быть иконка"
            />
          </a>
          <a href="https://vk.com/">
            <img
              className={styles.science}
              src="https://i.pinimg.com/564x/26/27/48/262748e8a215f7315815339c1e95ef1d.jpg"
              alt="тут должна была быть иконка"
            />
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Personal;
