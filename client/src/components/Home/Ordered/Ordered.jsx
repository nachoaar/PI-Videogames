import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { orderBy } from '../../../redux/actions';
import s from './Ordered.module.css';

export default function Filtered ({setPage}) {

    const dispatch = useDispatch();

    const [/*order*/, setOrder] = useState('');

    function order (e) {
        e.preventDefault();
        dispatch(orderBy(e.target.value));
        setPage(1);
        setOrder(e.target.value);
    }

    return (
        <div className={s.filter}>
            <span className={s.filter}>
                Ordenar
            </span>
            <select className={s.select} onChange={(e) => order(e)} defaultValue="view">
                <option value="view" disabled hidden>Nombre</option>
                <option value="default">Clear</option>
                <option value="az">A-Z</option>
                <option value="za">Z-A</option>
            </select>
            <select className={s.select} onChange={(e) => order(e)} defaultValue="view">
                <option value="view" disabled hidden>Rating</option>
                <option value="default">Clear</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
            </select>
        </div>
    )
}