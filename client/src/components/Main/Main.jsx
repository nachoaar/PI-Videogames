import React from 'react';
import { Link } from 'react-router-dom';
import Slider from '../Slider/Slider';
import styles from './Main.module.css';

export default function Main () {

    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <div className={styles.text}>
                    <p>Welcome</p>
                </div>
                <div className={styles.button}>
                    <Link to ='/videogames'>
                        <button>Ingresar</button>
                    </Link>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.slider}>
                    <Slider/>
                </div>
            </div>
        </div>
    )
}