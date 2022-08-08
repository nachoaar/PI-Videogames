import React from 'react';
import { Link } from 'react-router-dom';
// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getAllVideogames } from '../redux/actions';

export default function Nav () {
    return (
        <div>
            <p>Navbar</p>
            <Link to='/'>
                <p>Main</p>
            </Link>
        </div>
    )
}