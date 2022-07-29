import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../../features/Application/applicationSlice";
import styles from "./styles.module.css";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading3Quarters,
} from "react-icons/ai";
import email_log from "../../../images/email.png";
import password_img from "../../../images/privacy.png";
import { Link } from "react-router-dom";

function Registration() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const error = useSelector((state) => state.application.registrError);
  const signingUp = useSelector((state) => state.application.signingUp);
  const [errorPassword, setErrorPassword] = useState("");
  const [login, setLogin] = useState("");
  const [eye, setEye] = useState(false);
  const [error_email, setError] = useState(error);
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const toggleBtn = () => {
    setEye((prevState) => !prevState);
  };
  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlelastName = (e) => {
    setLastName(e.target.value);
  };
  const handleLogin = (e) => {
    setLogin(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleRegisters = (e) => {
    if (email[0] !== " " && password[0] !== " ") {
      if (password.length < 6) {
        setErrorPassword("Пороль не должен быть  меньще 6 символов");
        return setTimeout(() => {
          setErrorPassword("");
        }, 1000);
      }
    }

    dispatch(createUser({ name, lastName, login, email, password }));
    setEmail("");
    setPassword("");
    setLogin("");
    setLastName("");
    setName("");
  };

  setTimeout(() => {
    if (error_email) {
      setError(null);
    }
  }, 1000);

  if (signingUp) {
    <div>
      <img src={AiOutlineLoading3Quarters} alt="" />
    </div>;
  } else {
    return (
      <>
        <div className={styles.registrContainer}>
          <div className={styles.registrBlock}>
            <div>
              <div className={styles.registr_text}>
                <h2>Регистрация</h2>
              </div>
              <div className={styles.input_box}>
                <input
                  className={styles.registr_email_password_name}
                  placeholder="Ведите Имя"
                  type="text"
                  value={name}
                  onChange={(e) => handleName(e)}
                  name=""
                  id=""
                />
              </div>
              <div className={styles.input_box}>
                <input
                  className={styles.registr_email_password_name}
                  placeholder="Ведите Фамилию"
                  type="text"
                  value={lastName}
                  onChange={(e) => handlelastName(e)}
                  name=""
                  id=""
                />
              </div>
              <div className={styles.input_box}>
                <input
                  className={styles.registr_email_password_name}
                  placeholder="Придумайте Логин"
                  type="text"
                  value={login}
                  onChange={(e) => handleLogin(e)}
                  name=""
                  id=""
                />
              </div>
              <div className={styles.input_box}>
                <img
                  className={styles.registr_email_password_img}
                  src={email_log}
                  alt="email_log"
                />
                <input
                  className={styles.registr_email_password_name}
                  placeholder="Придумайте E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => handleEmail(e)}
                />
              </div>
              <div className={styles.input_box}>
                <img
                  className={styles.registr_email_password_img}
                  src={password_img}
                  alt="email_log"
                />
                <input
                  className={styles.registr_email_password_name}
                  placeholder="Придумайте Пороль"
                  type={eye ? "text" : "password"}
                  value={password}
                  onChange={(e) => handlePassword(e)}
                />
                <button className={styles.btn_eye} onClick={toggleBtn}>
                  {eye ? (
                    <AiOutlineEyeInvisible className={styles.eye_img} />
                  ) : (
                    <AiOutlineEye className={styles.eye_img} />
                  )}
                </button>
                <div className={styles.error}>{error_email}</div>
                <div className={styles.error}>{errorPassword}</div>
              </div>

              <div>
                <button
                  className={
                    !password || !email || !login || !name || !lastName
                      ? styles.registr_btn_submit_opacity
                      : styles.registr_btn_submit
                  }
                  disabled={!password || !email || !login || !name || !lastName}
                  onClick={() => handleRegisters()}
                >
                  Зарегистрироватся
                </button>
                <div className={styles.authorization_link}>
                  <p>У вас есть аккаунт?</p>
                  <p>
                    <Link className={styles.authorization_link_text} to="/signin">Войти</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Registration;
