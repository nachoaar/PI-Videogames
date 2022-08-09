import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav () {
    return (
        <div className='navbar'>
            <Link to='/'>
                <p>Logo</p>
            </Link>
            <Link to='/videogame'>
                <p>Detail</p>
            </Link>
            <Link to='/videogames'>
                <p>Home</p>
            </Link>
        </div>
    )
}