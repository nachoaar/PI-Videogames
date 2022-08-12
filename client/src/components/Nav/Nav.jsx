import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css'

export default function Nav () {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <h3>Logo</h3>
            </div>
            <div className='navigation'>
                    <Link to='/videogames'>
                        <p>Home</p>
                    </Link>
                    <Link to='/videogames/create'>
                        <p>Create</p>
                    </Link>
            </div>
            <div className='social'>
                <Link to='/Github'>
                    <p>Github</p>
                </Link>
            </div>
        </nav>
    )
}