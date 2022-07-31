import React from 'react';
import styles from '../Yandex_map/yandex.module.css'

const YandexMap = () => {
    return (
        <div className={styles.map}>
            <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3Afdce0ef935c4643e4cabc6014590f33c204f9a62417ed9e12d40dece8195aebb&amp;source=constructor" title='map' width="1062" height="450" frameborder="0"></iframe>f
        </div>
    );
};

export default YandexMap;