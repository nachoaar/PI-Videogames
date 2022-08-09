import React, { useState } from 'react';
import Nav from '../Nav/Nav.jsx';
import { useSelector } from 'react-redux';

import Card from '../Card/Card';
import Pagination from '../Pagination/Pagination.jsx';

export default function Home () {
    
    const videogames = useSelector((state) => state.videogames);
    
    const [page, setPage] = useState(1);
    const [perPage] = useState(15)

    const max = Math.ceil(videogames.length / perPage);

    return (
        <div>
            <Nav/>
            <h1>Video Games</h1>
            <h2>The most wanted</h2>
            <Pagination
                page={page} 
                setPage={setPage} 
                max={max}
            />
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
    )
}