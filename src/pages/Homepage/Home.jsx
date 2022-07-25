import React from 'react';
import Body from '../../Components/Body/Body';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import styles from "./Home.module.css"

const Homepage = () => {
    return (
        <div className={styles.Home}>
            <Header />
            <Body /> 
            <Footer />
        </div>
    );
};

export default Homepage;