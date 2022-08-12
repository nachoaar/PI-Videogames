import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDetail } from '../../redux/actions/index.js';
import Nav from '../Nav/Nav.jsx';

export default function Detail () {

    const dispatch = useDispatch();
    const { id } = useParams();

    const detail = useSelector((state) => state.details);

    useEffect(() => {
        dispatch(getDetail(id));
    },[dispatch, id])

    console.log(id);

    return (
        <div>
            <Nav />
            <img src={detail.background_image} alt="not found" />
            <h3>{detail.name}</h3>
            <p>{detail.description}</p>
            <p>{detail.rating}</p>
            <p>{detail.released}</p>
        </div>
    )
}