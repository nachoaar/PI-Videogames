import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideogames, returnAll } from "../../../redux/actions";
import Loader from "../../Loader/Loader";
import Card from "./Card/Card";
import s from "./Cards.module.css";

export default function Cards({ page, perPage, setPage }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch]);

  //const videogames = useSelector((state) => state.videogames);

  const videogames = useSelector((state) => state.videogames);

  const filtered = useSelector((state) => state.filtered);

  function handleReturn (e) {
    e.preventDefault();
    dispatch(returnAll());
    setPage(1);
  }

  function cards() {
    if (filtered.length > 0) {
      return (
        <div className={s.card_render}>
          {filtered
            ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
            .map((v) => {
              return (
                <Card
                  key={v.id}
                  name={v.name}
                  rating={v.rating}
                  genres={v.genres}
                  background_image={v.background_image}
                  id={v.id}
                />
              );
            })}
        </div>
      );
    } else {
      return (
        <div className={s.not_found}>
          <h3>404</h3>
          <p>Videojuego no encontrado</p>
            <button className={s.submit} onClick={(e) => handleReturn(e)}>Regresar</button>
        </div>
      );
    }
  }

  return (
    <div>
      {videogames.length > 0 ? cards() : <Loader />}
    </div>
  );
}
