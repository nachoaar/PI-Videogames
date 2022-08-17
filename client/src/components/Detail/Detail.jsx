import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { deleteCache, getDetail } from "../../redux/actions/index.js";
import Loader from "../Loader/Loader.jsx";
import s from "./Detail.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getDetail(id));
    return () => {
      dispatch(deleteCache());
    };
  }, [dispatch, id]);

  const detail = useSelector((state) => state.details);

  return (
    <div className={s.center}>
      {Object.keys(detail).length === 0 ? (
        <div className={s.loader}>
          <Loader />
        </div>
      ) : (
        <div className={s.container}>
          <header className={s.header}>
            <div>
              <span className={s.logo}>GAME.DEV</span>
            </div>
            <nav>
              <Link to="/videogames">
                <button data-text="Awesome" className={s.button}>
                  <span className={s.actual_text}>&nbsp;RETURN&nbsp;</span>
                  <span className={s.hover_text} aria-hidden="true">
                    &nbsp;RETURN&nbsp;
                  </span>
                </button>
              </Link>
            </nav>
          </header>
          <main className={s.main}>
            <div className={s.left}>
              <div className={s.image}>
                <img src={detail.background_image} alt="Imagen devideojuego" />
              </div>
            </div>
            <div className={s.right}>
              <h3>{detail.name}</h3>
              <hr />
              <span>
                Rating: <p>{detail.rating}</p>
              </span>
              <hr />
              <p className={s.description}>{detail.description}</p>
              <hr />
              <span>
                Creado el: <p>{detail.released}</p>
              </span>
              <hr />
              <span>
                Generos: <p>{detail.genres.join(", ")}</p>
              </span>
              <hr />
              <span>
                Plataformas: <p>{detail.platforms.join(", ")}</p>
              </span>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}

// {Object.keys(detail).length === 0 ? (
//   <Loader />
// ) : (
//   <div className={s.info}>
//     <div className={s.image}>
//       <img src={detail.background_image} alt="Imagen de videojuego" />
//     </div>
//     <h3>{detail.name}</h3>
//     <p>{detail.description}</p>
//     <p>{detail.rating}</p>
//     <p>{detail.released}</p>
//   </div>
// )}
