import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterBy, orderBy } from '../../redux/actions';
import './Filtered.css';

export default function Filtered ({setPage, setOrder}) {

    const genres = useSelector((state) => state.genres);
    const dispatch = useDispatch();

    function filter (e) {
        e.preventDefault();
        dispatch(filterBy(e.target.value));
        setPage(1);
    } 

    function order (e) {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setPage(1);
        setOrder(`Ordenado ${e.target.value}`);
    }

    return (
        <div>
            <h3>Filtrado</h3>
            <select onChange={(e) => filter(e)} defaultValue="mostrar">
                <option value="mostrar" disabled hidden>Choose genre</option>
                <option value="default">Todos</option>
                {genres?.map((g) => {
                    return (
                        <option key={g.id} value={g.name}>{g.name}</option>
                    )
                })}
            </select>
            <select onChange={(e) => filter(e)} defaultValue="mostrar">
                <option value="mostrar" disabled hidden>Choose type of creation</option>
                <option value="default">Todos</option>
                <option value="database">Database</option>
                <option value="api">Api</option>
            </select>
            <h3>Ordenamiento</h3>
            <select onChange={(e) => order(e)} defaultValue="mostrar">
                <option value="mostrar" disabled hidden>Choose alphabetical order</option>
                <option value="default">Clear</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <select onChange={(e) => order(e)} defaultValue="mostrar">
                <option value="mostrar" disabled hidden>Choose by rating</option>
                <option value="default">Clear</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    )
}