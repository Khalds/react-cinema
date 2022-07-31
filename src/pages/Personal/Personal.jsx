import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import styles from "./Personal.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSent } from "../../features/Sent/sentSlice";

const Personal = () => {
  const sentEmail = useSelector((state) => state.sentEmail);
  const dispatch = useDispatch();
  const [sent, setSent] = useState(false);

  const hanldeClick = () => {
    setSent(true);
    dispatch(fetchSent);
  };

  return (
    <div className={styles.border}>
      <Header />

      <div className={styles.wrapper}>
        <div>
          <h1 className={styles.personalPage}>Личный кабинет</h1>
          <div className={styles.exitWrapper}>
            <img
              className={styles.exit}
              src="https://cdn0.iconfinder.com/data/icons/thin-line-color-2/21/05_1-512.png"
              alt="тут должна была быть фотoграфия..."
            ></img>
          </div>
        </div>
        <div className={styles.user_info}>
          <div className={styles.user_data}>
            <Link to="/">
              <img
                className={styles.avatar}
                src="https://pngimage.net/wp-content/uploads/2019/05/location-icon-png-black-and-white-1.png"
                alt="тут должна была быть фотoграфия..."
              ></img>
            </Link>
            <div className={styles.userName}>
              <div className={styles.login}>login:</div>
              <div className={styles.password}>Nick-Name:</div>
            </div>
          </div>
          <div className={styles.details}>
            <div className={styles.capabilities}>Ваши возможности</div>
            <div className={styles.description}>
              Здесь вы можете посмотреть все ваши данные, о покупках и о личной
              информации, или же если вам нужно получить Электронный билет,
              можете нажать на кнопку, "Отправить" ниже в списке
            </div>
            <div>
              <button
                className={styles.getEmail}
                onClick={hanldeClick}
                disabled={sent}
              >
                <span> {sent ? "Отправлено" : "Отправить"}</span>
              </button>
            </div>
          </div>
        </div>
        <div className={styles.orders}>
          <p>Название</p>
          <p>Цена</p>
          <div>
            <p>Перейти к заказу</p>
            <Link to="/sessions">
              <img
                className={styles.ticket}
                src="https://cdn-icons-png.flaticon.com/512/708/708721.png"
                alt="Тут должен быть билет"
              />
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.textSupport}>
            Остались вопросы? Можете связаться с нами
          </div>
          <div className={styles.support}>
            <a href="https://vk.com/abu_harris">
              <img
                className={styles.vk}
                src="https://i.pinimg.com/736x/6c/bf/9e/6cbf9e8fd2edb84e0c2073506ec32923.jpg"
                alt="тут должна была быть иконка"
              />
            </a>
            <a href="https://t.me/official_iviru">
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
      </div>
      <Footer />
    </div>
  );
};

export default Personal;
