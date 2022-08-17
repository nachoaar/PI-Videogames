import React from 'react';
import { Link } from 'react-router-dom';
import s from './Navigation.module.css';

export default function Header() {
    return (
        <div className={s.navigation}>
            <Link to='/videogames'>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
                    <path d="M32 19l-6-6v-9h-4v5l-6-6-16 16v1h4v10h10v-6h4v6h10v-10h4z"></path>
                </svg>
            </Link>
            <Link to='/videogames/create'>
                <button data-text="Awesome" className={s.button}>
                    <span className={s.actual_text}>&nbsp;CREATE&nbsp;</span>
                    <span className={s.hover_text} aria-hidden="true">&nbsp;CREATE&nbsp;</span>
                </button>
            </Link>
        </div>
    )
}  
