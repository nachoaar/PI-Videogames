import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getVideogames, getGenres } from '../../redux/actions';
import { Link } from 'react-router-dom';
import './Main.css'

export default function Main () {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideogames());
        dispatch(getGenres());
    },[dispatch]);

    return (
        <div>
            <h1 className='h1'>Welcome</h1>
            <Link to ='/videogames'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}