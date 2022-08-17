import React from 'react';
import './Card.css';

export default function Card (props) {
    return (
        <div className='card'>
            <div className='image'>
                <img src={props.background_image} alt='not found'/>
            </div>
            <h3>{props.name}</h3>
            <p>{props.genres.join(", ")}</p>
            <p>{props.rating}</p>
        </div>
    )
}