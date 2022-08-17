import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "./Cards/Cards.jsx";
import Filtered from "./Filtered/Filtered.jsx";
import Ordered from "./Ordered/Ordered.jsx";
import Navigation from "../Navigation/Navigation.jsx";
import { getGenres, returnAll } from "../../redux/actions/index.js";
import SearchBar from "../Navigation/SearchBar/SearchBar.jsx";
import s from "./Home.module.css";
import Pagination from "./Pagination/Pagination.jsx";

export default function Home() {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);
  const [perPage] = useState(15);
  const [restart, setRestart] = useState(true);

  const filtered = useSelector((state) => state.filtered);
  const max = Math.ceil(filtered.length / perPage);

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  function handleReturn (e) {
    e.preventDefault();
    dispatch(returnAll());
    setRestart(true)
    setPage(1);
  }

  return (
      <div className={s.container}>
        <header className={s.navigation}>
          <div>
            <span className={s.logo}>GAME.DEV</span>
          </div>
          <div className={s.search}>
            <SearchBar setPage={setPage} setRestart={setRestart} />
          </div>
          <nav>
            <Navigation/>
          </nav>
        </header>
        <section className={s.modification}>
          <div className={s.filter_order}>
            <Filtered setPage={setPage} />
            <div hidden={restart === true}>
              <svg onClick={(e) => handleReturn(e)} className={s.return} version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
              <path d="M32 12h-12l4.485-4.485c-2.267-2.266-5.28-3.515-8.485-3.515s-6.219 1.248-8.485 3.515c-2.266 2.267-3.515 5.28-3.515 8.485s1.248 6.219 3.515 8.485c2.267 2.266 5.28 3.515 8.485 3.515s6.219-1.248 8.485-3.515c0.189-0.189 0.371-0.384 0.546-0.583l3.010 2.634c-2.933 3.349-7.239 5.464-12.041 5.464-8.837 0-16-7.163-16-16s7.163-16 16-16c4.418 0 8.418 1.791 11.313 4.687l4.687-4.687v12z"></path>
              </svg>
            </div>
            <Ordered setPage={setPage} />
          </div>
        </section>
        <section className={s.paginated}>
          <Pagination page={page} setPage={setPage} max={max} />
        </section>
        <section className={s.cards}>
          <Cards page={page} perPage={perPage} setPage={setPage} />
        </section>
        <section className={s.paginated}>
          <Pagination page={page} setPage={setPage} max={max} />
        </section>
      </div>
  );
}