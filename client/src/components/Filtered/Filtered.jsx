import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByGenres } from '../../redux/actions';
import './Filtered.css';

export default function Filtered ({setPage}) {

    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    function handleOnChange (e) {
        e.preventDefault();
        setPage(1)
        dispatch(filterByGenres(e.target.value));
    } 

    return (
        <div>
            <h3>Filtrado</h3>
            <select onChange={(e) => handleOnChange(e)} defaultValue="default">
                <option value="default" disabled hidden>Choose genres</option>
                {genres?.map((g) => {
                    return (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    )
                })}
            </select>          
        </div>
    )
}