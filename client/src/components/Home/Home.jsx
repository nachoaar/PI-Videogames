import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Card from './Card/Card.jsx';
import Pagination from './Pagination/Pagination.jsx';
import Filtered from './Filtered/Filtered.jsx';
import Ordered from './Ordered/Ordered.jsx'
import Header from '../Header/Header.jsx';
import './Home.css';
import Loader from '../Loader/Loader.jsx';
import { getGenres, getVideogames } from '../../redux/actions/index.js';

export default function Home () {

    const [page, setPage] = useState(1);
    const [perPage] = useState(15);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);
    
    const videogames = useSelector((state) => state.videogames);

    const filtered = useSelector((state) => state.filtered);

    const max = Math.ceil(filtered.length / perPage);
    
    return (
        <main className='main'>
                <Header
                    setPage={setPage}
                />
            {videogames.length === 0 ? (
                <Loader/>
            ) : (
            <section>
                <article>
                    <Filtered
                        setPage={setPage}
                    />
                    <Ordered
                        setPage={setPage}
                    />
                </article>
                <article>
            {filtered.length > 0 ? (
            <div>
                <Pagination
                    page={page} 
                    setPage={setPage} 
                    max={max}
                />
                <div className='grid'>
                    {filtered?.slice(
                        (page - 1) * perPage,
                        (page - 1) * perPage + perPage
                    ).map((v) => {
                        return (
                            <Card
                                key={v.id}
                                name={v.name}
                                rating={v.rating}
                                genres={v.genres}
                                background_image={v.background_image}
                                id={v.id}
                            />
                        )
                    })}
                </div>
                <Pagination
                    page={page} 
                    setPage={setPage} 
                    max={max}
                    />
            </div>
            ) : (
                <div>
                    <h3>No hay videojuegos</h3>
                    <button>Volver</button>
                </div>
            )}
                </article>
            </section>
                )}
            <footer>
                <p>Fin.</p>
            </footer>
        </main>
    )
}