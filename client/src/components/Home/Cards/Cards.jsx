import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getVideogames } from '../../../redux/actions';
import Loader from '../../Loader/Loader';
import Card from './Card/Card';
import s from './Cards.module.css';



export default function Cards({page, perPage}) {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getVideogames());
    }, [dispatch]);

    //const videogames = useSelector((state) => state.videogames);
    
    const videogames = useSelector((state) => state.videogames);

    const filtered = useSelector((state) => state.filtered);

    function cards() {
        if (filtered.length > 0) {
            return (
                <div className={s.card_render}>
                    {filtered?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
                    .map((v) => {
                        return (
                            <Link to={`/videogame/${v.id}`}>
                                <Card
                                    key={v.id}
                                    name={v.name}
                                    rating={v.rating}
                                    genres={v.genres}
                                    background_image={v.background_image}
                                    id={v.id}
                                />
                            </Link>
                        )
                    })}
                </div>
            )
        } else {
            return (
                <p>error</p>
            )
        }
    }

    return (
        <div className={s.allCards}>
            {videogames.length > 0 ? cards() : (<Loader/>)}
        </div>
    )
}
