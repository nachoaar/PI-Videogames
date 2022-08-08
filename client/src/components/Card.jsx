import React from 'react';

export default function Card (props) {
    return (
        <div>
            <img src={props.background_image} alt='not found'/>
            <p>{props.genres.join(", ")}</p>          
            <h3>{props.name}</h3>
        </div>
    )
}

// width='200px' height='250px' 