import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from './SearchBar/SearchBar'


export default function Header({setPage}) {
    return (
        <div>
            <nav className='navbar'>
                <div className='logo'>
                    <Link to='/videogames'>
                        <h3>Logo</h3>
                    </Link>
                </div>
                <div className='social'>
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
