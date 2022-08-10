import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'
import SearchBar from '../SearchBar/SearchBar';

export default function Nav () {
    return (
        <div className='navbar'>
            <div className='logo'>
                <Link to='/'>
                    <p>Logo</p>
                </Link>
            </div>
            <div className='search'>
                <SearchBar/>
            </div>
            <div className='home'>
                <Link to='/videogames'>
                    <p>Home</p>
                </Link>
            </div>
        </div>
    )
}