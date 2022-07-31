import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { auth } from "../../../features/Application/applicationSlice"
import styles from "../../Authorization/authComponents/authorizationPage.module.css"
import email_log from "../../../images/email.png"
import password_img from "../../../images/privacy.png"
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"

function Authorization() {
  const [email, setLogin] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const error_block = useSelector((state) => state.application.authError)
  const [eye, setEye] = useState(false)
  const [error_blo, setError] = useState(error_block)

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

  setTimeout(() => {
    if (error_blo) {
      setError(null)
    }
  }, 2000)

  return (
    <>
      <div className={styles.authContainer}>
        <div className={styles.authBlock}>
          <div>
            <div className={styles.auth_text}>
              <h1>Вход</h1>
            </div>
            <div className={styles.imgs_block}>
              <div className={styles.input_box}>
                <img
                  className={styles.email_password_img}
                  src={email_log}
                  alt="email_log"
                />
                <input
                  className={styles.email_password_name}
                  placeholder="Ведите E-mail"
                  type="email"
                  value={email}
                  onChange={(e) => handleAuthEmail(e)}
                />
              </div>
              <div className={styles.input_box}>
                <img
                  className={styles.email_password_img}
                  src={password_img}
                  alt="password_img"
                />
                <input
                  className={styles.email_password_name}
                  placeholder="Ведите Пароль"
                  type={eye ? "text" : "password"}
                  value={password}
                  onChange={(e) => handleAuthPassword(e)}
                />
                <button className={styles.btn_eye} onClick={toggleBtn}>
                  {eye ? (
                    <AiOutlineEyeInvisible className={styles.eye_img} />
                  ) : (
                    <AiOutlineEye className={styles.eye_img} />
                  )}
                </button>

                <div className={styles.error}>{error_blo}</div>
              </div>

              <div>
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
                <div className={styles.authorization}>
                  <p>У вас нет аккаунта ?</p>{" "}
                  <p>
                    <Link
                      className={styles.authorization_link_text}
                      to="/signup"
                    >
                      Зарегистрироватся
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Authorization
