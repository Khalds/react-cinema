import React from "react";
import styles from "./cardCinema.module.css";

const CardCinema = ({ img, title, amountHall, placesHall, mood }) => {
  console.log(img   );
  return (
    <div className={styles.flexDiv}>
      <div className={styles.cinemaWrapperShadow}>
        <div
          className={styles.cinemaWrapperPosition}
          style={{ background: `url(${ img })` }}
        >
          <div className={styles.cinemaWrapperInformation}>
            <div>
              <div className={styles.cinemaWrapperTitle}>{title}</div>
              <div className={styles.cinemaWrapperHall}>
                {amountHall} зала <span>{placesHall} мест</span>
              </div>
            </div>
            <div className={styles.cinemaWrapperAdress}>{mood}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardCinema;
