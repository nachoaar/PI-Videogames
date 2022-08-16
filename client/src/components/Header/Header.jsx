import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'


export default function Header({setPage}) {
    return (
        <div>
            <nav className='header'>
                <div className='logo'>
                    <Link to='/videogames'>
                        <h3>Logo</h3>
                    </Link>
                </div>
                <div className='nav'>
                    <Link to='/Github'>
                        <p>Github</p>
                    </Link>
                    <SearchBar
                        setPage={setPage}
                    />
                </div>
            </nav>
        </div>
    )
}  
