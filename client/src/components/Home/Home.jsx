import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cards from './Cards/Cards.jsx';
import Filtered from './Filtered/Filtered.jsx';
import Ordered from './Ordered/Ordered.jsx'
import Navigation from '../Navigation/Navigation.jsx';
import { getGenres } from '../../redux/actions/index.js';
import SearchBar from '../Navigation/SearchBar/SearchBar.jsx';
import s from './Home.module.css';
import Pagination from './Pagination/Pagination.jsx';


export default function Home () {

    const dispatch = useDispatch();
    
    const [page, setPage] = useState(1);
    const [perPage] = useState(15);

    const filtered = useSelector((state) => state.filtered);
    const max = Math.ceil(filtered.length / perPage);
    
    useEffect(() => {
        dispatch(getGenres());
    },[dispatch]);
    
    return (
        <div>
            <div className={s.container}>
                <header className={s.navigation}>
                    <div>
                        <span className={s.logo}>GAME.DEV</span>
                    </div>
                    <div className={s.search}>
                        <SearchBar 
                            setPage={setPage}
                        />
                    </div>
                    <nav>
                        <Navigation
                            setPage={setPage}
                        />
                    </nav>
                </header>
                <section className={s.modification}>
                    <div className={s.filter_order}>
                        <Filtered
                            setPage={setPage}
                        />
                        <Ordered
                            setPage={setPage}
                        />
                    </div>
                </section>
                <section className={s.paginated}>
                    <Pagination
                        page={page}
                        setPage={setPage}
                        max={max}
                    />
                </section>
                <section className={s.cards}>
                    <Cards 
                        page={page}
                        perPage={perPage}
                    />
                </section>
            </div>
            <footer className={s.footer}>
                <p>Footer</p>
            </footer>
        </div>
    )
}
        // <main className='main'>
        //         <Header
        //             setPage={setPage}
        //         />
        //     {videogames.length === 0 ? (
        //         <Loader/>
        //     ) : (
        //     <section>
        //         <article>
        //             <Filtered
        //                 setPage={setPage}
        //             />
        //             <Ordered
        //                 setPage={setPage}
        //             />
        //         </article>
        //         <article>
        //     {filtered.length > 0 ? (
        //     <div>
        //         <Pagination
        //             page={page} 
        //             setPage={setPage} 
        //             max={max}
        //         />
        //         <div className='grid'>
        //             {filtered?.slice(
        //                 (page - 1) * perPage,
        //                 (page - 1) * perPage + perPage
        //             ).map((v) => {
        //                 return (
        //                     <Card
        //                         key={v.id}
        //                         name={v.name}
        //                         rating={v.rating}
        //                         genres={v.genres}
        //                         background_image={v.background_image}
        //                         id={v.id}
        //                     />
        //                 )
        //             })}
        //         </div>
        //         <Pagination
        //             page={page} 
        //             setPage={setPage} 
        //             max={max}
        //             />
        //     </div>
        //     ) : (
        //         <div>
        //             <h3>No hay videojuegos</h3>
        //             <button>Volver</button>
        //         </div>
        //     )}
        //         </article>
        //     </section>
        //         )}
        //     <footer>
        //         <p>Fin.</p>
        //     </footer>
        // </main>