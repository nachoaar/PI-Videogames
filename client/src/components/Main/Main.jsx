import React from 'react';
import { Link } from 'react-router-dom';
import './Main.css'

export default function Main () {
    return (
        <div>
            <h1 className='h1'>Welcome</h1>
            <Link to ='/videogames'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}