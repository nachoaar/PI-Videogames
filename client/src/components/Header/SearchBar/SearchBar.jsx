import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../../redux/actions';
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

    // function handleReturn (e) {
    //     e.preventDefault();
    //     dispatch(returnAll());
    //     setPage(1);
    // }

    return (
        <div className='searchbar'>
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