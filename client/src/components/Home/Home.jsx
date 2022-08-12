import React, { useState } from 'react';
import Nav from '../Nav/Nav.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideogames, getGenres } from '../../redux/actions';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination.jsx';
import Filtered from '../Filtered/Filtered.jsx';
import Ordered from '../Ordered/Ordered.jsx'
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
            <header>
                <Nav/>
            </header>
            <section className='iteration'>
                <Filtered
                    setPage={setPage}
                />
                <SearchBar
                    setPage={setPage}
                />
                <Ordered
                    setPage={setPage}
                    setOrder={setOrder}
                    order={order}
                />
            </section>
            <section>
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
                <Pagination
                    page={page} 
                    setPage={setPage} 
                    max={max}
                />
            </section>
            <footer>
                <p>Fin.</p>
            </footer>
        </main>
    )
}