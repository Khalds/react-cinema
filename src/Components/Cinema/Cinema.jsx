import React, { useEffect } from "react";
import styles from "./cinema.module.css";
import { useDispatch, useSelector } from "react-redux";
import CardCinema from "../CardCinema/CardCinema";
import { getCinema } from "../../features/Cinema/cinemaSlice";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import YandexMap from "../Yandex_map/YandexMap";
import { Link } from "react-router-dom";
import imageIcon from "./icon.png";
const Cinema = () => {
  const dispatch = useDispatch();

  const cinema = useSelector((state) => state.cinemaReducer.cinema);

  useEffect(() => {
    dispatch(getCinema());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className={styles.main}>
        <h1>Кинотеатры</h1>
        <div className={styles.positionContentCentr}>
          <div className={styles.content}>
            {cinema.map((cinem) => {
              return (
                <Link to="/sessions">
                  <CardCinema
                    key={cinem._id}
                    img={cinem.img}
                    title={cinem.title}
                    amountHall={cinem.amountHall}
                    placesHall={cinem.placesHall}
                    mood={cinem.mood}
                  />
                </Link>
              );
            })}
          </div>
        </div>
        <div className={styles.iconsAndTitleWrapper}>
          <h2>Сеть кинотеатров </h2>
          <div className={styles.imageIconWrapper}>
            <img src={imageIcon} alt="icon" />
          </div>
        </div>
        <YandexMap />
      </div>
      <Footer />
    </>
  );
};

export default Cinema;
