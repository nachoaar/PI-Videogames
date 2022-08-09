import React from 'react';
import './Card.css';

export default function Card (props) {
    return (
        <div className='card'>
            <img className='image' src={props.background_image} alt='not found'/>
            <h3>{props.name}</h3>
            <p>{props.genres.join(", ")}</p>          
        </div>
    )
}

// width='200px' height='250px' 