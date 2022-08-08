import React from 'react';
import Nav from './Nav';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getVideogames } from '../redux/actions';
import Card from './Card';

export default function Home () {

    const videogames = useSelector((state) => state.videogames);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
    },[dispatch]);

    return (
        <div>
            <Nav/>
            <h1>Video Games</h1>
            <h2>The most wanted</h2>
            {videogames && videogames.map((v) => {
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