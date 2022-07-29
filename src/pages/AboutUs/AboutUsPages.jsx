import React from 'react';
import AboutUs from './AboutUs';
import styles from "./aboutUs.module.css";

const AboutUsPages = () => {
    return (
        <div className={styles.aboutUs}>
           
            <div>
                <AboutUs/>
            </div>
        </div>
    );
};

export default AboutUsPages;