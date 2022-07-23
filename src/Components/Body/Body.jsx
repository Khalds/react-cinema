import React from 'react';
import Movies from '../Movies/Movies';
import Sidebar from '../Sidebar/Sidebar';
import styles from "./Body.module.css"

const Body = () => {
    return (
        <div>
            <Sidebar className={styles.Sidebar} />
            <Movies className={styles.Movies} />
        </div>
    );
};

export default Body;