import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchByName } from '../../redux/actions';
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

    function handleOnClick (e) {
        dispatch(searchByName(input.search, e.target.value));
        setPage(1);
        setInput({
            search: ''
        })
    }

    return (
        <div>
            <button onClick={(e) => handleOnClick(e)} value="default">Refresh</button>
            <input 
                type="search" 
                name="search"
                placeholder="Search.." 
                onChange={(e) => handleChange(e)}
                value={input.search}
            />
            <button onClick={(e) => handleOnClick(e)} value="name">Submit</button>
        </div>
    )
}