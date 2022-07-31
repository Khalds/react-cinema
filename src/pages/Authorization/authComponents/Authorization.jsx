import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { auth } from "../../../features/Application/applicationSlice"
import styles from "../../Authorization/authComponents/authorizationPage.module.css"
import email_log from "../../../images/email.png"
import password_img from "../../../images/privacy.png"
import { Link } from "react-router-dom"

import { AiOutlineLock } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"

import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading3Quarters,
} from "react-icons/ai"

function Authorization() {
  const [email, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const error_block = useSelector((state) => state.application.authError)
  const [eye, setEye] = useState(false)

  const toggleBtn = () => {
    setEye((prevState) => !prevState)
  }

  const handleAuthEmail = (e) => {
    setLogin(e.target.value)
  }

  const handleAuthPassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCome = () => {
    dispatch(auth({ email, password }))
    setLogin("")
    setPassword("")
  }

  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.registerBlock}>
          <div className={styles.register_text}>
            <h1>Авторизация</h1>
          </div>
          <div className={styles.error}>{error_block}</div>

          <div className={styles.register_inputs}>
            <div className={styles.input_box}>
              <HiOutlineMail className={styles.icon} />
              <input
                className={styles.email_password_name}
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => handleAuthEmail(e)}
              />
            </div>
            <div className={styles.input_box}>
              <AiOutlineLock className={styles.icon} />

              <input
                className={styles.email_password_name}
                placeholder="Пароль"
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => handleAuthPassword(e)}
              />
              {eye ? (
                <AiOutlineEyeInvisible
                  className={styles.btn_eye}
                  onClick={toggleBtn}
                />
              ) : (
                <AiOutlineEye className={styles.btn_eye} onClick={toggleBtn} />
              )}
            </div>
            <div className={styles.send_btn}>
              <button
                disabled={!email || !password}
                className={
                  !email || !password
                    ? styles.btn_opacity_submit
                    : styles.btn_submit
                }
                onClick={handleCome}
              >
                Войти
              </button>
            </div>
            <div className={styles.authorization_link}>
              <p>У вас нет аккаунта?</p>
              <Link to="/signup">Зарегистрироваться</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authorization
