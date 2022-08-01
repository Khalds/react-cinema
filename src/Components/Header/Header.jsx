import React, { useState } from "react";
import styles from "./Header.module.css";
import { VscAccount } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";

import useTimeout from "../../useTimeout";

const Header = () => {
  const [activ, inactive] = useState(false);
  const [img, setImg] = useState(null);
  // useTimeout(() => {
  //   setImg(reclama);
  // }, 1000);

  // useTimeout(() => {
  //   setImg(null);
  // }, 100000);
  // const handleRemoveLogo = () => {
  //   setImg(false);
  // };

  return (
    <div className={styles.Header}>
      <Link to="/movie/62e4f0c8f7283e57cdee84eb">
        <div className={styles.reclama}>
          <img src={img} alt=""></img>
        </div>
      </Link>
      {/* {img && (
        <button onClick={handleRemoveLogo} className={styles.buttonEx}>
          ❎
        </button>
      )} */}

      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/">
            <h1>IntoCinema</h1>
          </Link>
        </div>
        <div className={styles.list_conteiner}>
          <ul className={styles.list}>
            <li>
              <NavLink to="/movies" className={styles.list_item}>
                Фильмы
              </NavLink>
            </li>
            <li>
              <NavLink to="/sessions" className={styles.list_item}>
                Расписание
              </NavLink>
            </li>
            <li>
              <NavLink to="/cinema" className={styles.list_item}>
                Кинотеатры
              </NavLink>
            </li>
       
            <li>
              <NavLink to="/aboutus" className={styles.list_item}>
                О компании
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={styles.user_acc}>
          <Link to="/personal">
            <VscAccount className={styles.acc} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
