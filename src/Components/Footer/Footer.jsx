import React from "react"
import styles from "./Footer.module.css"
import { FiFacebook } from "react-icons/fi"
import { BsInstagram } from "react-icons/bs"
import { FiTwitter } from "react-icons/fi"
import { AiOutlineYoutube } from "react-icons/ai"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.partners}>
        <h1>Наши партнёры </h1>
      </div>
      <div className={styles.footer_top}>
        <div className={styles.logo}>
          <h1>IntoCinema</h1>
        </div>
        <div className={styles.container_partners}>
          <ul className={styles.partners_list}>
            <li>
              <img
                src="https://reelcinemas.com/tridion/en-ae/Images/tech-partner-mx4d_tcm307-131975.png"
                alt="img"
              ></img>
            </li>
            <li>
              <img
                src="https://reelcinemas.com/tridion/en-ae/Images/DolbyCinema-New-Arabic-22h_tcm307-137988.png"
                alt="img"
              ></img>
            </li>
            <li>
              <img
                src="https://reelcinemas.com/tridion/en-ae/Images/tech-partner-dolby_tcm307-131974.png"
                alt="img"
              ></img>
            </li>
          </ul>
        </div>
        <div className={styles.networks_container}>
          <ul className={styles.networks_list}>
            <li>
              <Link to="https://ru-ru.facebook.com/">
                <FiFacebook />
              </Link>
            </li>
            <li>
              <Link to="https://twitter.com/?lang=ru">
                <FiTwitter />
              </Link>
            </li>
            <li>
              <Link to="https://www.instagram.com/">
                <BsInstagram />
              </Link>
            </li>
            <li>
              <Link to="https://www.youtube.com/">
                <AiOutlineYoutube />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.footer_bot}>
        <h4>
          Copyright © Reel Entertainment LLC. All rights reserved. Terms &
          Conditions Privacy Policy
        </h4>
      </div>
    </div>
  )
}

export default Footer
