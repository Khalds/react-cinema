import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { createUser } from "../../../features/Application/applicationSlice"
import styles from "./styles.module.css"
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineLoading3Quarters,
} from "react-icons/ai"
import { Link } from "react-router-dom"

import { AiOutlineLock } from "react-icons/ai"
import { HiOutlineMail } from "react-icons/hi"

function Registration() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const error = useSelector((state) => state.application.registrError)
  const signingUp = useSelector((state) => state.application.signingUp)
  const [errorPassword, setErrorPassword] = useState("")
  const [login, setLogin] = useState("")
  const [eye, setEye] = useState(false)
  const [error_email, setError] = useState(error)
  const [name, setName] = useState("")
  const [lastName, setLastName] = useState("")

  const toggleBtn = () => {
    setEye((prevState) => !prevState)
  }
  const handleName = (e) => {
    setName(e.target.value)
  }
  const handleLastName = (e) => {
    setLastName(e.target.value)
  }
  const handleLogin = (e) => {
    setLogin(e.target.value)
  }
  const handlePassword = (e) => {
    setPassword(e.target.value)
  }
  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleRegisters = (e) => {
    if (email[0] !== " " && password[0] !== " ") {
      if (password.length < 6) {
        setErrorPassword("Пароль не должен быть  меньше 6 символов")
      } else {
        setErrorPassword("")
      }
    }

    dispatch(createUser({ name, lastName, login, email, password }))
    setEmail("")
    setPassword("")
    setLogin("")
    setLastName("")
    setName("")
  }

  if (error_email) {
    setError(null)
  }
  if (signingUp) {
    return (
      <div>
        <img src={AiOutlineLoading3Quarters} alt="" />
      </div>
    )
  }
  return (
    <>
      <div className={styles.registerContainer}>
        <div className={styles.registerBlock}>
          <div className={styles.register_text}>
            <h1>Регистрация</h1>
          </div>
          <div className={styles.error}>
            {error_email}
            {errorPassword}
          </div>
          <div className={styles.register_inputs}>
            <div className={styles.input_box}>
              <input
                className={styles.register_email_password_name}
                placeholder="Имя"
                type="text"
                value={name}
                onChange={(e) => handleName(e)}
                name=""
                id=""
              />
            </div>
            <div className={styles.input_box}>
              <input
                className={styles.register_email_password_name}
                placeholder="Фамилия"
                type="text"
                value={lastName}
                onChange={(e) => handleLastName(e)}
                name=""
                id=""
              />
            </div>
            <div className={styles.input_box}>
              <input
                className={styles.register_email_password_name}
                placeholder="Логин"
                type="text"
                value={login}
                onChange={(e) => handleLogin(e)}
                name=""
                id=""
              />
            </div>
            <div className={styles.input_box}>
              <HiOutlineMail className={styles.icon} />
              <input
                className={styles.register_email_password_name}
                placeholder="E-mail"
                type="email"
                value={email}
                onChange={(e) => handleEmail(e)}
              />
            </div>
            <div className={styles.input_box}>
              <AiOutlineLock className={styles.icon} />
              <input
                className={styles.register_email_password_name}
                placeholder="Пароль"
                type={eye ? "text" : "password"}
                value={password}
                onChange={(e) => handlePassword(e)}
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
                className={
                  !password || !email || !login || !name || !lastName
                    ? styles.register_btn_submit_opacity
                    : styles.register_btn_submit
                }
                disabled={!password || !email || !login || !name || !lastName}
                onClick={() => handleRegisters()}
              >
                Зарегистрироваться
              </button>
            </div>
            <div className={styles.authorization_link}>
              <p>У вас есть аккаунт?</p>
              <Link to="/signin">Войти</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Registration
