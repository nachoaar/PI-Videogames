import React, { useState } from 'react';
import Nav from '../Nav/Nav.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideogames, getGenres } from '../../redux/actions';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination.jsx';
import Filtered from '../Filtered/Filtered.jsx';
import './Home.css';
import SearchBar from '../SearchBar/SearchBar.jsx';

export default function Home () {
    
    const [page, setPage] = useState(1);
    const [perPage] = useState(15);
    const [order, setOrder] = useState("");
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);

    console.log(page);

    const videogames = useSelector((state) => state.filtered);
    
    const max = Math.ceil(videogames.length / perPage);
    
    return (
        <main className='main'>
            <section className='section'>
                <aside>
                    <div className='sticky'>
                        <h1>Logo</h1>
                        <h2>The most wanted</h2>
                        <SearchBar
                            setPage={setPage}
                        />
                        <Filtered
                            setPage={setPage}
                            setOrder={setOrder}
                            order={order}
                        />
                    </div>
                </aside>
                <article>
                    <header>
                        <Nav/>
                    </header>
                    <Pagination
                        page={page} 
                        setPage={setPage} 
                        max={max}
                    />
                    <div className='grid'>
                        {videogames?.slice(
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
                </article>
            </section>
            <footer>
                <p>Fin.</p>
            </footer>
        </main>
    )
}