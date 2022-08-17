import React from "react";
import { Link } from "react-router-dom";
import s from "./Main.module.css";

export default function Main() {
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
              <span className={s.hover_text} aria-hidden="true">
                &nbsp;START&nbsp;
              </span>
            </button>
          </Link>
        </nav>
      </header>
      <main className={s.main}>
        <div className={s.left}>
          <div className={s.welcome}>
            <div className={s.image}></div>
            <h2 className={s.h2}>¡BIENVENIDO!</h2>
            <span className={s.text}>
              Quieres conocer todo sobre tus videojuegos favoritos? hazlo con la
              mejor app sobre los mejores y más divertidos videojuegos.
            </span>
            <Link to="/videogames">
              <button data-text="Awesome" className={s.button}>
                <span className={s.actual_text}>&nbsp;START&nbsp;</span>
                <span className={s.hover_text} aria-hidden="true">
                  &nbsp;START&nbsp;
                </span>
              </button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
