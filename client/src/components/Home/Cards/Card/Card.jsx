import React from "react";
import { Link } from "react-router-dom";
import s from "./Card.module.css";

export default function Card(props) {
  return (
    <Link className={s.link} to={`./videogame/${props.id}`}>
      <div className={s.div}>
        <div
          className={s.card}
          style={{ backgroundImage: `url('${props.background_image}') ` }}
        >
          <h3>{props.name}</h3>
          <p>{props.genres.join(", ")}</p>
          <p>{props.rating}</p>
        </div>
      </div>
    </Link>
  );
}
