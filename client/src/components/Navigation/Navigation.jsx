import React from "react";
import { Link } from "react-router-dom";
import s from "./Navigation.module.css";

export default function Header() {
  return (
    <div className={s.navigation}>
      <Link to="/videogames/create">
        <button data-text="Awesome" className={s.button}>
          <span className={s.actual_text}>&nbsp;CREATE&nbsp;</span>
          <span className={s.hover_text} aria-hidden="true">
            &nbsp;CREATE&nbsp;
          </span>
        </button>
      </Link>
    </div>
  );
}
