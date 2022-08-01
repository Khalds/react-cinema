import React from "react";
import Movies from "../Movies/Movies";

import styles from "./Body.module.css";

const Body = () => {
  return (
    <div>
      <Movies className={styles.Movies} />
    </div>
  );
};

export default Body;
