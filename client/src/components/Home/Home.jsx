import React, { useState } from 'react';
import Nav from '../Nav/Nav.jsx';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getVideogames, getGenres } from '../../redux/actions';
import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination.jsx';
import Filtered from '../Filtered/Filtered.jsx';
import './Home.css';

export default function Home () {
    
    const [page, setPage] = useState(1);
    const [perPage] = useState(15)
    
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);

    console.log(page);

    const videogames = useSelector((state) => state.videogames);
    
    const max = Math.ceil(videogames.length / perPage);

    
    return (
        <div>
            <Nav/>
            <div className='container'>
                <h1>Video Games</h1>
                <h2>The most wanted</h2>
                {/* <span className='lupa'>
                <svg xmlns="http://www.w3.org/2000/svg" class="svg css-uwwqev" viewBox="0 0 21 20" preserveAspectRatio="xMidYMid meet"><g transform="scale(1 -1) rotate(-45 -11.93502884 -2)" stroke="currentColor" stroke-width="1.65" fill="none" fill-rule="evenodd"><circle cx="7.70710678" cy="7.70710678" r="7"></circle><path d="M15.2071068 8.62132034h5.6923881" stroke-linecap="square"></path></g></svg>
                </span> */}
                <Pagination
                    page={page} 
                    setPage={setPage} 
                    max={max}
                />
                <div className='gridmain'>
                    <div className='filter'>
                        <Filtered
                            setPage={setPage}
                        />
                    </div>
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
                </div>
            </div>
        </div>
    )
}