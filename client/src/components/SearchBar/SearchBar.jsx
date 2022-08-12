import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName, returnAll } from '../../redux/actions';
import './SearchBar.css';

export default function SearchBar ({setPage}) {

    const [input, setInput] = useState({
        search: ''
    })

    const dispatch = useDispatch();

    function handleChange (e) {
        setInput({
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit (e) {
        e.preventDefault();
        dispatch(searchByName(input.search));
        setPage(1);
        setInput({
            search: ''
        })
    }

    function handleReturn (e) {
        e.preventDefault();
        dispatch(returnAll());
        setPage(1);
    }

    return (
        <div className='searchbar'>
            <svg onClick={(e) => handleReturn(e)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M9.8 31.45q-1-1.8-1.4-3.625Q8 26 8 24.1q0-6.55 4.725-11.275Q17.45 8.1 24 8.1h2.15l-4-4 1.95-1.95 7.45 7.45-7.45 7.45-2-2 3.95-3.95H24q-5.35 0-9.175 3.825Q11 18.75 11 24.1q0 1.45.275 2.75t.675 2.45ZM23.8 46l-7.45-7.45 7.45-7.45 1.95 1.95-4 4H24q5.35 0 9.175-3.825Q37 29.4 37 24.05q0-1.45-.25-2.75T36 18.85l2.15-2.15q1 1.8 1.425 3.625Q40 22.15 40 24.05q0 6.55-4.725 11.275Q30.55 40.05 24 40.05h-2.25l4 4Z"/></svg>
            {/* <button onClick={(e) => handleReturn(e)} value="default">Refresh</button> */}
            <form onSubmit={(e) => handleSubmit(e)}>
            <input 
                type="search" 
                name="search"
                placeholder="Search.." 
                onChange={(e) => handleChange(e)}
                value={input.search}
            />
            <input type="submit" value="Submit" />
            </form>
        </div>
    )
}