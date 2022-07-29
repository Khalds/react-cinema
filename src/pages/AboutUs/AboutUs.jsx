import React from "react";
import styles from "./aboutUs.module.css";
import logo_k from "../../images/k.png";
import logo_b from "../../images/B.png";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className={styles.aboutUsConteyner}>
      <div className={styles.aboutUsBlock}>
        <div>
          <h1 className={styles.x}>О компании</h1>
        </div>
        <div className={styles.aboutСompany}>
          <div className={styles.about_Box}>
            <p className={styles.number_about_Box}>3</p>
            <p>современных</p>
            <p>кинотеатра</p>
          </div>
          <div className={styles.about_Box}>
            <p className={styles.number_about_Box}>3</p>
            <p>комфортабельных</p>
            <p>кинозала</p>
          </div>
          <div className={styles.about_Box}>
            <p className={styles.number_about_Box}>200</p>
            <p>посадочных</p>
            <p>мест</p>
          </div>
        </div>
        <div>
          <dic className={styles.about_detailed_information}>
            <p>
              Современное оборудование
              <br />
              Просторные залы
              <br />
              Собственная кухня
              <br />
              более
              <span> 6 видов попкорна</span>
            </p>
            <p className={styles.about_detailed_information_block2}>
              <span> В VIP залах</span> вас ждут вместо обычных кресел
              комфортные диваны для одного, двоих и троих гостей <br/> и
               столики,  оснащенные кнопками <br />
              <span>
                {" "}
                вызова официанта, который принесет вам любое блюдо из меню{" "}
              </span>
              прямо в зал.
            </p>
          </dic>
          <dic>
            <div>
              <Link
                className={styles.conteyner_of_vacancies_and_contacts}
                to="/"
              >
                <div className={styles.block_of_vacancies_and_contacts}>
                  <img src={logo_b} alt="logo_k" />
                  <p>Вакансии</p>
                </div>
                <div className={styles.block_of_vacancies_and_contacts}>
                  <img src={logo_k} alt="logo_k" />
                  <p>Контакты</p>
                </div>
              </Link>
            </div>
          </dic>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
