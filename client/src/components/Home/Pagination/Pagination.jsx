import React, { useState } from "react";
import s from "./Pagination.module.css";

export default function Pagination({ page, setPage, max }) {
  const numbers = [];

  for (let i = 1; i <= max; i++) {
    numbers.push(i);
  }

  const [input, setInput] = useState(1);

  const nextPage = () => {
    setInput(parseInt(input + 1));
    setPage(parseInt(page + 1));
  };

  const prevPage = () => {
    setInput(parseInt(input - 1));
    setPage(parseInt(page - 1));
  };

  return (
    <div className={s.pagination}>
      <button
        className={s.btn}
        hidden={numbers.length === 0}
        disabled={page === 1 || page < 1}
        onClick={prevPage}
      >
        &laquo;
      </button>
      <ul>
        {numbers?.map((p) => {
          return (
            <li
              className={
                page === p ? [s.page, s.active].join(" ") : `${s.page}`
              }
              onClick={() => setPage(p)}
              key={p}
            >
              <span>{p}</span>
            </li>
          );
        })}
      </ul>
      <button
        className={s.btn}
        hidden={numbers.length === 0}
        disabled={page === max || page > max}
        onClick={nextPage}
      >
        &raquo;
      </button>
    </div>
  );
}
