import React, { useState } from "react";
import Body from "../../Components/Body/Body";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";

import styles from "./Home.module.css";

// import { set } from "immer/dist/internal";

const Homepage = () => {
  // const img = ([image, setImage] = useState(null));

  return (
    <div className={styles.Home}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default Homepage;
