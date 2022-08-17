import React from 'react';
import { Link } from 'react-router-dom';
// import Slider from '../Slider/Slider';
import s from './Main.module.css';

export default function Main () {

    return (
        <div className={s.container}>
            <header className={s.header}>
                <div>
                    <span className={s.logo}>GAME.DEV</span>
                </div>
                <nav>
                    <Link to="/videogames">
                        <button data-text="Awesome" className={s.button}>
                            <span className={s.actual_text}>&nbsp;START&nbsp;</span>
                            <span className={s.hover_text} aria-hidden="true">&nbsp;START&nbsp;</span>
                        </button>
                    </Link>
                </nav>
            </header>
            <main className={s.main}>
                <div className={s.left}>
                    <div className={s.welcome}>
                        <h2 className={s.h2}>¡BIENVENIDO!</h2>
                        <span className={s.text}>Quieres conocer todo sobre tus videojuegos favoritos? hazlo con la mejor app sobre los mejores y más divertidos videojuegos.</span>
                        <Link to="/videogames">
                        <button data-text="Awesome" className={s.button}>
                            <span className={s.actual_text}>&nbsp;START&nbsp;</span>
                            <span className={s.hover_text} aria-hidden="true">&nbsp;START&nbsp;</span>
                        </button>
                    </Link>
                    </div>
                </div>
                <div className={s.right}>
                    <p>Derecha</p>
                </div>
            </main>
            <section className={s.example}>
                <div>
                    <p>Section</p>
                </div>
                <div>
                    <p>Section</p>
                </div>
                <div>
                    <p>Section</p>
                </div>
                <div>
                    <p>Section</p>
                </div>
            </section>
        </div>
        
        // <div className={styles.container}>
        //     <div className={styles.left}>
        //         <div className={styles.text}>
        //             <p>Welcome</p>
        //         </div>
        //         <div className={styles.button}>
        //             <Link to ='/videogames'>
        //                 <button>Ingresar</button>
        //             </Link>
        //         </div>
        //     </div>
        //     <div className={styles.right}>
        //         <div className={styles.slider}>
        //             <Slider/>
        //         </div>
        //     </div>
        // </div>
    )
}