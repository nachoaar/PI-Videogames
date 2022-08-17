import React from "react";
import { Link } from "react-router-dom";
import s from "./NotFound.module.css";

export default function Loader() {
  return (
    <div className={s.container}>
      <div className={s.not_found}>
        <h3>404</h3>
        <p>Al parecer hubo un error</p>
        <Link to={"/videogames"}>
          <button className={s.submit}>
            Regresar
          </button>
        </Link>
      </div>
    </div>
  );
}