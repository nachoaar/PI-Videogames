import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterBy } from "../../../redux/actions";
import s from "./Filtered.module.css";

export default function Filtered({ setPage }) {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  function filter(e) {
    e.preventDefault();
    dispatch(filterBy(e.target.value));
    setPage(1);
  }

  return (
    <div className={s.filter}>
      <span>Filtrar</span>
      <select
        className={s.select}
        onChange={(e) => filter(e)}
        defaultValue="view"
      >
        <option value="view" disabled hidden>
          Genre
        </option>
        <option value="default">All</option>
        {genres?.map((g) => {
          return (
            <option key={g.id} value={g.name}>
              {g.name}
            </option>
          );
        })}
      </select>
      <select
        className={s.select}
        onChange={(e) => filter(e)}
        defaultValue="view"
      >
        <option value="view" disabled hidden>
          Creation
        </option>
        <option value="default">Todos</option>
        <option value="database">Database</option>
        <option value="api">Api</option>
      </select>
    </div>
  );
}
