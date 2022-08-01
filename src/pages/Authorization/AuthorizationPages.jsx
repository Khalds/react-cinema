import React from "react";
import Authorization from "./authComponents/Authorization";
import styles from "../Authorization/authComponents/authorizationPage.module.css";
import { useSelector } from "react-redux";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const AuthorizationPages = () => {
  const signingnIn = useSelector((state) => state.application.signingnIn);


  if (signingnIn) {
    return (
      <div className={styles.loading_block}>
        <AiOutlineLoading3Quarters className={styles.loading_class} />
      </div>
    );
  }

  return (
    <div className={styles.authorization_pages}>
      <div>
        <Authorization className={styles.authorization_pages} />
      </div>
    </div>
  );
};

export default AuthorizationPages;
