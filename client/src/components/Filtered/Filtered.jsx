import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterByCreation, filterByGenres, filterByAlphabetic } from '../../redux/actions';
import './Filtered.css';

export default function Filtered ({setPage}) {

    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    function filterGenre (e) {
        e.preventDefault();
        setPage(1);
        dispatch(filterByGenres(e.target.value));
    } 

    function filterCreation (e) {
        e.preventDefault();
        setPage(1);
        dispatch(filterByCreation(e.target.value));
    }

    function filterAlphabetic (e) {
        e.preventDefault();
        setPage(1);
        dispatch(filterByAlphabetic(e.target.value));
    }

    return (
        <div>
            <h3>Filtrado</h3>
            <select onChange={(e) => filterGenre(e)} defaultValue="default">
                <option value="default" disabled hidden>Choose genre</option>
                <option value="all">Todos</option>
                {genres?.map((g) => {
                    return (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    )
                })}
            </select>
            <select onChange={(e) => filterCreation(e)} defaultValue="default">
                <option value="default" disabled hidden>Choose type of creation</option>
                <option value="all">Todos</option>
                <option value="database">Database</option>
                <option value="api">Api</option>
            </select>
            <h3>Ordenamiento</h3>
            <select onChange={(e) => filterAlphabetic(e)} defaultValue="default">
                <option value="default" disabled hidden>Choose alphabetical order</option>
                <option value="clear">Clear</option>
                <option value="asc">A-Z</option>
                <option value="desc">Z-A</option>
            </select>
            <select defaultValue="default">
                <option value="default" disabled hidden>Choose by rating</option>
                <option value="clear">Clear</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    )
}