import React from "react";
import styles from "./Footer.module.css";
import { FiFacebook } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className={styles.Footer}>
      <div className={styles.conteier__partners}>
        <h1>Наши партнёры </h1>
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
      <div className={styles.store_conteiner}>
        <h1>Intocinema</h1>
        <div className={styles.stores}>
          <img
            src="https://reelcinemas.com/Images/applestore_tcm295-131980.svg"
            alt="applestore_tcm295"
          />
          <img
            src="https://reelcinemas.com/Images/googlestore_tcm295-131981.svg"
            alt="googlestore_tcm295"
          />
        </div>
        <h4>
          Copyright © Reel Entertainment LLC. All rights reserved. Terms &
          Conditions Privacy Policy
        </h4>
      </div>
      <div className={styles.networks_conteiner}>
        <ul className={styles.networks_list}>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiTwitter />
          </li>
          <li>
            <BsInstagram />
          </li>
          <li>
            <AiOutlineYoutube />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
