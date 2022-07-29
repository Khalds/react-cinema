import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Registration from "./regisComponents/Registration";
import styles from "./regisComponents/styles.module.css";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const RegistrationPages = () => {
  const signingUp = useSelector((state) => state.application.signingUp);

  if (signingUp) {
    return (
      <div className={styles.loading_block}>

        <AiOutlineLoading3Quarters className={styles.loading_class} />
      </div>
    );
  }
  return (
    <div>
      <div className={styles.registration_pages}>
        <Registration />
      </div>
    </div>
  );
};

export default RegistrationPages;
