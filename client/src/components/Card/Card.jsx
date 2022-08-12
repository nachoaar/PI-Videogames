import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';

export default function Card (props) {
    return (
        <div className='card'>
            <div className='image'>
                <img src={props.background_image} alt='not found'/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.genres.join(", ")}</p>
            <p>{props.rating}</p>
            <Link to={`/videogame/${props.id}`}>
                <p>Ver más.</p>
            </Link>  
        </div>
    )
}